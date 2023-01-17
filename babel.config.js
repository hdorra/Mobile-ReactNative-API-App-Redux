module.exports = function(api) {
  api.cache(true);
  return {
    //presets: ['babel-preset-expo'],
      presets: [['module:metro-react-native-babel-preset', {
          unstable_disableES6Transforms: true
      }]],
    plugins: ['react-native-reanimated/plugin'],
  };
};
