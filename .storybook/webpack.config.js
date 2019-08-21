const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });
  config.module.rules.push({
    test: /\.ttf$/,
    loader: require.resolve("url-loader"),
    include: path.resolve(__dirname, "node_modules/react-native-vector-icons")
  });
  config.resolve.alias = {
    "react-native": "react-native-web"
  };
  config.resolve.extensions.push(".web.ts", ".web.tsx", ".ts", ".tsx");
  return config;
};
