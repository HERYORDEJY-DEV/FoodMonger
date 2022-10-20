module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: [
    'src/assets/fonts/',
    'src/assets/images/',
    'src/assets/svgs/',
  ], // stays the same
};

// yarn react-native generate-bootsplash src/assets/images/zooto_boot_icon.png --background-color=012245 --logo-width=198 --assets-path=assets --flavor=main
