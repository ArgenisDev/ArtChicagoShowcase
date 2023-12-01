import { normalize } from "@utils/functions";


export const textVariants = {
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(40),
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(32),
  },
  smallTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(24),
  },
  'smallTitle-bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(24),
  },
  'smallTitle-Light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(24),
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
  },
  'body-bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(16),
  },
  'body-Light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(16),
  },
  textBody: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
  },
  'textBody-Bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(12),
  },
  'textBody-Light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(12),
  },
  smallText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(8),
  },
  'smallText-Bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(8),
  },
  'smallText-Light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(8),
  },
  defaults: {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(16),
  },
};
