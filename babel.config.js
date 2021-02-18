module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@fonts': './src/assets/fonts',
          '@styles': './src/assets/styles',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
