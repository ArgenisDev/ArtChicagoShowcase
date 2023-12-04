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
  'smallTitle-light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(24),
  },
  bigBody: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(20),
  },
  'bigBody-bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(20),
  },
  'bigBody-light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(20),
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
  },
  'body-medium': {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(16),
  },
  'body-bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(16),
  },
  'body-light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(16),
  },
  textBody: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
  },
  'textBody-bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(12),
  },
  'textBody-light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(12),
  },
  smallText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(8),
  },
  'smallText-bold': {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(8),
  },
  'smallText-light': {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(8),
  },
  defaults: {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(16),
  },
};
