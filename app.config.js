module.exports = {
  expo: {
    name: 'coffee-shop',
    slug: 'coffee-shop',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    backgroundColor: '#000000',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#000000',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.denisdov.coffeeshop',
      config: {
        googleMapsApiKey: 'AIzaSyA1Hj68HqET-L_Tz-dgneK95PTxp7PNWWw',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#000000',
      },
      package: 'com.denisdov.coffeeshop',
      config: {
        googleMaps: {
          apiKey: 'AIzaSyByYQxmpZ8TOzrZndOIJSlzqWxdKSoxmyk',
        },
      },
    },
    androidStatusBar: {
      barStyle: 'light-content',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/favicon.png',
    },
    plugins: ['expo-router'],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: 'f12c2487-a29d-4f58-8f7a-f242462d6d70',
      },
    },
  },
};
