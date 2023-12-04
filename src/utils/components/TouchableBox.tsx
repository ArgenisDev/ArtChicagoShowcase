import {createBox} from '@shopify/restyle';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import type {Theme} from '@constants/theme';

export const TouchableComponent = createBox<
  Theme,
  TouchableOpacityProps & {children?: React.ReactNode}
>(TouchableOpacity);
