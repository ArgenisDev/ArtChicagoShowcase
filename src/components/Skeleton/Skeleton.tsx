import {colors} from '@constants/colors';
import {Box} from '@utils/components';
import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Skeleton = () => {
  return (
    <Box flex={1} justifyContent="center">
      <ActivityIndicator size="large" color={colors.pink} />
    </Box>
  );
};
