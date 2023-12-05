import {Theme} from '@constants/theme';
import {createText} from '@shopify/restyle';
import Reanimated from 'react-native-reanimated';

export const Text = createText<Theme>();
export const ReanimatedText = Reanimated.createAnimatedComponent(Text);
