import React from 'react';
import {Box, Text} from '@utils/components';

export const WrapperComponent = ({children}) => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      {children}
    </Box>
  );
};
