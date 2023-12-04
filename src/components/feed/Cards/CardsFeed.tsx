import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, TouchableComponent} from '@utils/components';
import {getImageDataArtic, normalize, removeHTML} from '@utils/functions';
import React from 'react';
import {Image} from 'react-native';
import {DataArtics, RootStackParamList} from 'src/interfaces';
import {feedStrings} from 'src/lang/es';

interface CardsFeedProps {
  item: DataArtics;
}
export const CardsFeed = ({item}: CardsFeedProps) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const goToDetail = () => navigate('Detail', {item});
  const description =
    removeHTML(item.description) ?? item.title ?? feedStrings.no_description;
  return (
    <TouchableComponent
      mt="l"
      p="xxs"
      width={normalize(140)}
      alignItems="center"
      backgroundColor="white"
      borderRadius={normalize(8)}
      activeOpacity={1}
      onPress={goToDetail}>
      <Image
        source={{uri: getImageDataArtic(item.image_id)}}
        style={{width: normalize(100), height: normalize(80), borderRadius: 10}}
        resizeMode="cover"
      />
      <Text
        variant="smallText-light"
        numberOfLines={2}
        textAlign="center"
        p="xxs"
        mt="xxs">
        {description}
      </Text>
    </TouchableComponent>
  );
};
