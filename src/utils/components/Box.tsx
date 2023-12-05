import {Theme} from '@constants/theme';
import {createBox} from '@shopify/restyle';
import {Animated} from 'react-native';
import Reanimated from 'react-native-reanimated';

export const Box = createBox<Theme>();
export const AnimatedBox = Animated.createAnimatedComponent(Box);
export const ReanimatedBox = Reanimated.createAnimatedComponent(Box);
