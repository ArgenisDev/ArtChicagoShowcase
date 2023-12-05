import {useFavouritesData} from '@hooks/index';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Box, WrapperComponent, Text} from '@utils/components';
import {getImageDataArtic, normalize, removeHTML} from '@utils/functions';
import {limitWords} from '@utils/functions/limitWords';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import {HeaderDetail} from 'src/components/feed/Details/HeaderDetail';
import {RootStackParamList} from 'src/interfaces';
import {feedStrings} from 'src/lang/es';
import {
  FadeInDown,
  FadeInLeft,
  SlideInRight,
  SlideInDown,
} from 'react-native-reanimated';
import {ReanimatedBox} from '@utils/components/Box';
import {ReanimatedText} from '@utils/components/Text';
export const DetailScreen = () => {
  const {
    params: {item},
  } = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const {title, date_display, artist_display, description} = item;
  const {isFavourite, saveLocalIdByFavourites, removeIdByFavourites} =
    useFavouritesData(item);
  return (
    <WrapperComponent>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1}>
          <HeaderDetail
            title={`${limitWords(item.artist_display)}`}
            actionSaveFavourites={saveLocalIdByFavourites}
            actionRemoveFavourites={removeIdByFavourites}
            isFavourite={isFavourite}
          />
          <ReanimatedBox entering={FadeInDown.duration(400).delay(300)}>
            <Image
              source={{uri: getImageDataArtic(item.image_id)}}
              style={{height: normalize(300)}}
              resizeMode="contain"
              resizeMethod="scale"
            />
          </ReanimatedBox>
          <ReanimatedText
            entering={FadeInLeft.duration(400).delay(300)}
            mt="xxxs"
            color="pink"
            paddingHorizontal="l"
            variant="smallTitle-bold">
            {title}
          </ReanimatedText>
          {artist_display && (
            <ReanimatedText
              mt="xxxs"
              color="white"
              paddingHorizontal="l"
              entering={SlideInRight.duration(400).delay(300)}
              variant="body-bold">
              Author:{'  '}
              <Text
                mt="xxxs"
                color="pink"
                paddingHorizontal="l"
                variant="body-light">
                {artist_display}
              </Text>
            </ReanimatedText>
          )}
          {date_display && (
            <ReanimatedText
              mt="xxxs"
              color="white"
              paddingHorizontal="l"
              entering={SlideInRight.duration(400).delay(300)}
              variant="body-bold">
              Date:{'  '}
              <Text
                mt="xxxs"
                color="pink"
                paddingHorizontal="l"
                variant="body-light">
                {date_display}
              </Text>
            </ReanimatedText>
          )}
          <ReanimatedText
            mt="xxxs"
            color="white"
            entering={SlideInDown.duration(400).delay(300)}
            paddingHorizontal="l"
            variant="body-light"
            mb="l">
            {removeHTML(description ?? feedStrings.no_description)}
          </ReanimatedText>
        </Box>
      </ScrollView>
    </WrapperComponent>
  );
};
