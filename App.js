import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationUtil from './app/navigation/NavigationUtil';

export default function App() {
  return (
    <AppNavigator
        ref={(navigatorRef) =>
          NavigationUtil.setTopLevelNavigator(navigatorRef)
        }
      />
  );
}
