module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {
      plugins: [
        "react-native-paper/babel"
      ]
    }
  },
  plugins: [
    "@babel/transform-react-jsx-source",
    [
      "module-resolver",
      {
        "root": [
          "/src"
        ],
        "alias": {
          "@actions": "./src/actions",
          "@api": "./src/api",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@fonts": "./src/assets/fonts",
          "@helpers": "./src/helpers",
          "@hocs": "./src/hocs",
          "@images": "./src/assets/images",
          "@reducers": "./src/reducers",
          "@router": "./src/router",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@static": "./src/static",
          "@stores": "./src/stores",
          "@types": "./src/types",
          "@utils": "./src/utils"
        }
      }
    ],
  ]
}

