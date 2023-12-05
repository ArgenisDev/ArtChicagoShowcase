import {useEffect, useState} from 'react';
import {getDataById} from 'src/server';
import {DataArtics} from 'src/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

export const useGetFavouritesPromiseAll = () => {
  const [data, setData] = useState<DataArtics[]>();
  const isFocused = useIsFocused();
  const getLocalIdByFavourites = async () => {
    const response = await AsyncStorage.getItem('favourites');
    const arrayFavourites = JSON.parse(response);
    return arrayFavourites;
  };
  const getData = async () => {
    const arrayFavourites: string[] = await getLocalIdByFavourites();
    if (!arrayFavourites) return setData([]);
    const dataResponse = await axios.all(
      arrayFavourites.map(async item => {
        return await getDataById(item);
      }),
    );
    setData(dataResponse);
  };
  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);
  return {data};
};
