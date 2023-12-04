import {createTheme} from '@shopify/restyle';
import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './textVariants';

export const theme = createTheme({
  colors: colors,
  spacing: spacing,
  textVariants: textVariants
});

export type Theme = typeof theme;
