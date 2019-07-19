module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });
  config.resolve.alias = {
    'react-native': 'react-native-web'
  };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
