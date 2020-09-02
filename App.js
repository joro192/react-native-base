import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationUtil from './app/navigation/NavigationUtil';
import {Provider} from 'react-redux';
import store from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator
        ref={(navigatorRef) =>
          NavigationUtil.setTopLevelNavigator(navigatorRef)
        }
      />
    </Provider>
  );
}
