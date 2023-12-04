import {useFavouritesData} from '@hooks/useFavouritesData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Box, WrapperComponent, Text} from '@utils/components';
import {getImageDataArtic, normalize, removeHTML} from '@utils/functions';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {HeaderDetail} from 'src/components/feed/Details/HeaderDetail';
import {RootStackParamList} from 'src/interfaces';
import {feedStrings} from 'src/lang/es';

export const DetailScreen = () => {
  const {
    params: {item},
  } = useRoute<RouteProp<RootStackParamList>>();
  const {title, date_display, artist_display, description} = item;
  const {isFavourite, saveLocalIdByFavourites, removeIdByFavourites} =
    useFavouritesData(item);
  return (
    <WrapperComponent>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1}>
          <HeaderDetail
            title={`${item.artist_display}`}
            actionSaveFavourites={saveLocalIdByFavourites}
            actionRemoveFavourites={removeIdByFavourites}
            isFavourite={isFavourite}
          />
          <Image
            source={{uri: getImageDataArtic(item.image_id)}}
            style={{height: normalize(300)}}
            resizeMode="contain"
            resizeMethod="scale"
          />
          <Text
            mt="xxxs"
            color="pink"
            paddingHorizontal="l"
            variant="smallTitle-bold">
            {title}
          </Text>
          {artist_display && (
            <Text
              mt="xxxs"
              color="white"
              paddingHorizontal="l"
              variant="body-bold">
              Author:{'  '}
              <Text
                mt="xxxs"
                color="pink"
                paddingHorizontal="l"
                variant="body-light">
                {artist_display}
              </Text>
            </Text>
          )}
          {date_display && (
            <Text
              mt="xxxs"
              color="white"
              paddingHorizontal="l"
              variant="body-bold">
              Date:{'  '}
              <Text
                mt="xxxs"
                color="pink"
                paddingHorizontal="l"
                variant="body-light">
                {date_display}
              </Text>
            </Text>
          )}
          <Text
            mt="xxxs"
            color="white"
            paddingHorizontal="l"
            variant="body-light"
            mb="l">
            {removeHTML(description ?? feedStrings.no_description)}
          </Text>
        </Box>
      </ScrollView>
    </WrapperComponent>
  );
};
