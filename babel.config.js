module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',

        },
      },
    ],
  ],
};
