module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'react-native-stylename-to-style',
        {
          extensions: ['css'],
        },
      ],
      [
        'react-native-platform-specific-extensions',
        {
          extensions: ['css'],
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
