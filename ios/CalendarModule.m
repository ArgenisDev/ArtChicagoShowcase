//
//  CalendarModule.m
//  ArtChicagoShowcase
//
//  Created by Argenis Peñaranda on 12/4/23.
//

#import <Foundation/Foundation.h>
#import "CalendarModule.h"
#import <EventKit/EventKit.h>
#import "EKEventStoreSingleton.h"

@interface CalendarModule()
@property (nonatomic) BOOL calendarAccessGranted;
@property (nonatomic) NSDictionary *eventOptions;

@property (nonatomic) RCTPromiseResolveBlock resolver;
@property (nonatomic) RCTPromiseRejectBlock rejecter;

@end


@implementation CalendarModule

RCT_EXPORT_MODULE()
RCT_EXPORT_METHOD(fetchEvents:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    EKEventStore *eventStore = [[EKEventStore alloc] init];
    [eventStore requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError *error) {
        if (granted) {
            NSCalendar *calendar = [NSCalendar currentCalendar];
            NSDate *startDate = [NSDate date];
            NSDate *endDate = [calendar dateByAddingUnit:NSCalendarUnitYear value:1 toDate:startDate options:0];

            NSPredicate *predicate = [eventStore predicateForEventsWithStartDate:startDate endDate:endDate calendars:nil];
            NSArray<EKEvent *> *events = [eventStore eventsMatchingPredicate:predicate];

            NSMutableArray<NSDictionary *> *formattedEvents = [NSMutableArray array];
            for (EKEvent *event in events) {
                [formattedEvents addObject:@{
                    @"title": event.title,
                    @"startDate": @(event.startDate.timeIntervalSince1970),
                    @"endDate": @(event.endDate.timeIntervalSince1970),
                }];
            }
            resolve(formattedEvents);
        } else {
            reject(@"calendar_permission_error", @"Calendar permission denied", error);
        }
    }];
}

RCT_EXPORT_METHOD(addEvent:(NSString *)title startDate:(double)startDate endDate:(double)endDate resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    EKEventStore *eventStore = [[EKEventStore alloc] init];
    [eventStore requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError *error) {
       
            EKEvent *event = [EKEvent eventWithEventStore:eventStore];
            event.title = title;
            NSTimeInterval startDateInterval = startDate / 1000;
            event.startDate = [NSDate dateWithTimeIntervalSince1970:startDateInterval];
            NSTimeInterval endDateInterval = endDate / 1000;
            NSLog(@"%@", [NSDate dateWithTimeIntervalSince1970:endDateInterval]);
            event.endDate = [NSDate dateWithTimeIntervalSince1970:endDateInterval];
            event.calendar = eventStore.defaultCalendarForNewEvents;
          
            NSError *saveError = nil;
            BOOL success = [eventStore saveEvent:event span:EKSpanThisEvent commit:YES error:&saveError];
            if (success) {
                resolve(@"Event added successfully");
            } else {
                reject(@"event_add_error", @"Error adding event", saveError);
            }
       
          
    }];
}
#pragma mark -
#pragma mark Calendar permission methods

RCT_EXPORT_METHOD(requestCalendarPermission:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    self.resolver = resolve;
    self.rejecter = reject;
    
    [self checkEventStoreAccessForCalendar];
}

- (void)checkEventStoreAccessForCalendar
{
    EKAuthorizationStatus status = [EKEventStore authorizationStatusForEntityType:EKEntityTypeEvent];
    
    switch (status)
    {
        case EKAuthorizationStatusAuthorized: [self markCalendarAccessAsGranted];
            break;
        case EKAuthorizationStatusNotDetermined: [self requestCalendarAccess];
            break;
        case EKAuthorizationStatusDenied:
        case EKAuthorizationStatusRestricted:
        {
            [self rejectCalendarPermission];
        }
            break;
        default:
            [self rejectCalendarPermission];
            break;
    }
}

- (void)markCalendarAccessAsGranted
{
    self.calendarAccessGranted = YES;
    [self resolvePromise: @(YES)];
}

- (void)rejectCalendarPermission
{
    [self resolvePromise: @(NO)];
}

- (void)requestCalendarAccess
{
    CalendarModule * __weak weakSelf = self;
    [[self getEventStoreInstance] requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError *error)
     {
         dispatch_async(dispatch_get_main_queue(), ^{
             if (granted) {
                 [weakSelf markCalendarAccessAsGranted];
             } else {
                 [weakSelf rejectCalendarPermission];
             }
         });
     }];
}
- (void)resolvePromise: (id) result {
    if (self.resolver) {
        self.resolver(result);
        [self resetPromises];
    }
}

- (void)resetPromises {
    self.resolver = nil;
    self.rejecter = nil;
}

- (EKEventStore *)getEventStoreInstance {
    return [EKEventStoreSingleton getInstance];
}

@end
