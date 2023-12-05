//
//  EKEventStoreSingleton.h
//  ArtChicagoShowcase
//
//  Created by Argenis Peñaranda on 12/5/23.
//

#ifndef EKEventStoreSingleton_h
#define EKEventStoreSingleton_h
#import <EventKit/EventKit.h>

@interface EKEventStoreSingleton : NSObject {
}


+ (EKEventStore *)getInstance;

@end

#endif
