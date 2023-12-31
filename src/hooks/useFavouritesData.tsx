import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataArtics} from 'src/interfaces';
export const useFavouritesData = (item: DataArtics) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const getLocalIdByFavourites = async () => {
    const response = await AsyncStorage.getItem('favourites');
    const arrayFavourites = JSON.parse(response);
    setIsFavourite(arrayFavourites?.includes(item.id));
  };

  const saveLocalIdByFavourites = async () => {
    const response = await AsyncStorage.getItem('favourites');
    let arrayFavourites = JSON.parse(response);
    if (!arrayFavourites) arrayFavourites = [];
    const {id} = item;
    arrayFavourites.push(id);
  
    const idItem = JSON.stringify(arrayFavourites);
    await AsyncStorage.setItem('favourites', idItem);
    getLocalIdByFavourites();
  };
  const removeIdByFavourites = async () => {
    const response = await AsyncStorage.getItem('favourites');
    const arrayFavourites = JSON.parse(response);
    const arrayWithOutItem = arrayFavourites.filter(fav => fav !== item.id);
    const idItem = JSON.stringify(arrayWithOutItem);
    await AsyncStorage.setItem('favourites', idItem);
    getLocalIdByFavourites();
  };
  useEffect(() => {
    getLocalIdByFavourites();
  }, []);
  return {saveLocalIdByFavourites, removeIdByFavourites, isFavourite};
};
