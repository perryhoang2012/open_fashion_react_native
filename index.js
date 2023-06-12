/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//! don't Scaling font text and text input
Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: true,
  maxFontSizeMultiplier: 1,
};
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: true,
  maxFontSizeMultiplier: 1,
};

AppRegistry.registerComponent(appName, () => App);
