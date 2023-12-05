import {createText} from '@shopify/restyle';
import {TextInput, TextInputProps, ViewProps} from 'react-native';
import type {Theme} from '@constants/theme';

export const Input = createText<
  Theme,
  TextInputProps & ViewProps & {children?: React.ReactNode}
>(TextInput);
