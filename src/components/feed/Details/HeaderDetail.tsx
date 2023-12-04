import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';
import {Box, TouchableComponent, Text} from '@utils/components';
import {normalize} from '@utils/functions';
import {ArrowLeft, Heart} from 'phosphor-react-native';
import React from 'react';

interface HeaderDetailProps {
  title: string;
  actionSaveFavourites: () => void;
  isFavourite: boolean;
  actionRemoveFavourites: () => void;
}
export const HeaderDetail = ({
  title,
  actionSaveFavourites,
  isFavourite,
  actionRemoveFavourites,
}: HeaderDetailProps) => {
  const {goBack} = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginHorizontal="xxxs"
      mb="l">
      <Box flexDirection="row" alignItems="center">
        <TouchableComponent onPress={goBack} ml="xxs">
          <ArrowLeft color={colors.pink} size={normalize(20)} weight="bold" />
        </TouchableComponent>
        <Text
          numberOfLines={1}
          ml="xxxs"
          color="white"
          variant="body-bold"
          pr="xxxl">
          {title}
        </Text>
      </Box>
      <TouchableComponent
        onPress={() =>
          !isFavourite ? actionSaveFavourites() : actionRemoveFavourites()
        }
        ml="xxs">
        <Heart
          size={normalize(25)}
          color={colors.red}
          weight={isFavourite ? 'fill' : 'regular'}
        />
      </TouchableComponent>
    </Box>
  );
};
