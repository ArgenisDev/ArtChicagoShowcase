import {Platform, Alert, NativeModules} from 'react-native';
import {useState} from 'react';
import {PERMISSIONS, check, request} from 'react-native-permissions';

export const useCalendar = () => {
  const [title, setTitle] = useState<string>();
  const getCalendar = async () => {
    const isAvailable = Platform.OS === 'ios';
    if (!isAvailable) return Alert.alert('Only available for IOS');
    const checkPermissions = await check(PERMISSIONS.IOS.CALENDARS);
    if (checkPermissions !== 'granted') {
      const requestPermissions = await request(PERMISSIONS.IOS.CALENDARS);
      if (requestPermissions === 'granted') getCalendar();
      return;
    }
    const startDate = (Date.now() / 1000 + 3600) * 1000;
    const endDate = (Date.now() / 1000 + 3600 * 2) * 1000;
    const saveEvent = await NativeModules.CalendarModule.addEvent(
      title,
      startDate,
      endDate,
    );
    if (saveEvent === 'Event added successfully')
      Alert.alert('Event added successfully');
  };

  return {setTitle, getCalendar};
};
