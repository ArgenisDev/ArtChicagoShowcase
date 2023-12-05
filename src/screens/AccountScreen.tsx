import {colors} from '@constants/colors';
import {useCalendar} from '@hooks/useCalendar';
import {
  Box,
  Input,
  TouchableComponent,
  WrapperComponent,
  Text,
} from '@utils/components';
import {normalize} from '@utils/functions';
import React from 'react';
import {StyleSheet} from 'react-native';
import {accountStrings} from 'src/lang/es/account';

export const AccountScreen = () => {
  const {getCalendar, setTitle} = useCalendar();

  return (
    <WrapperComponent>
      <Box flex={1} alignItems="center">
        <Text variant="bigBody-bold" color="white" mb="l">
          {accountStrings.only_for_ios}
        </Text>
        <Input
          color="pink"
          style={styles.stylesCalendar}
          placeholder="Title Event"
          placeholderTextColor={colors.white}
          padding="s"
          onChangeText={e => setTitle(e)}
        />
        <TouchableComponent
          onPress={getCalendar}
          width={normalize(150)}
          padding="xxxs"
          borderRadius={10}
          backgroundColor="pink"
          mt="l">
          <Text
            variant="smallText-bold"
            color="mainBackground"
            textAlign="center">
            {accountStrings.button_title}
          </Text>
        </TouchableComponent>
      </Box>
    </WrapperComponent>
  );
};
const styles = StyleSheet.create({
  stylesCalendar: {
    width: '90%',
    borderWidth: 1,
    borderColor: colors.white,
  },
});
