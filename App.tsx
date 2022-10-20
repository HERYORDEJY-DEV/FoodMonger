import { NativeBaseProvider } from 'native-base';
import React from 'react';
//import * as Font from 'expo-font';

import AppNavigation from './src/navigation';

let customFonts = {
  AvenirRegular: require('./src/assets/fonts/Avenir-Next-Font.ttf'),
  'AvenirNextW04-Demi': require('./src/assets/fonts/Avenir-Next-W04-Demi.ttf'),
  'AvenirNextW10-Medium': require('./src/assets/fonts/Avenir-Next-W10-Medium.ttf'),
  'AvenirNextW06-Bold': require('./src/assets/fonts/Avenir-Next-W06-Bold.ttf'),
  'BROmega-Regular': require('./src/assets/fonts/BR-Omega-Regular.ttf'),
  'BR-Omega-Medium': require('./src/assets/fonts/BR-Omega-Medium.ttf'),
  'BROmega-SemiBold': require('./src/assets/fonts/BR-Omega-SemiBold.ttf'),
  'SFPro-SemiBold': require('./src/assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFPro-Bold': require('./src/assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFPro-Regular': require('./src/assets/fonts/SF-Pro-Display-Regular.otf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    customTextProps: {
      style: {
        fontFamily: 'AvenirNextLTPro-Regular',
      },
    },
  };

  // async _loadFontsAsync() {
  //   await Font.loadAsync(customFonts);
  //   await setCustomText(this.state.customTextProps);
  //   await setCustomTextInput(this.state.customTextProps);
  //   this.setState({ fontsLoaded: true });
  // }

  // componentDidMount() {
  //   this._loadFontsAsync();
  //   // this.loadAssets();
  // }

  render() {
    return (
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    );
  }
}

/* Welcome Back, */
