const path = require('path');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

if (process.env.IS_STORYBOOK) {
  module.exports.projectRoot = path.resolve(__dirname, 'storybook');
  module.exports.watchFolders = ['src', 'node_modules'].map(p => path.resolve(__dirname, p));
}
