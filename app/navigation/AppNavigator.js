import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {UserScreen, HomeScreen} from '@screen';
import R from '@R';
import {SCREEN_ROUTER} from '@constant';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native';
import StackBottomBar from './stack/StackBottomBar';
import NavigationUtil from "./NavigationUtil";

const TabBarIcon = {
  [SCREEN_ROUTER.HOME]: R.images.ic_home,
  [SCREEN_ROUTER.USER]: R.images.ic_user,
};

import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => (
  <Tab.Navigator
    tabBar={(props) => (
      <BottomTabBar
        {...props}
        style={{
          ...props.style,
          height: Platform.OS != 'ios' ? 60 : 80,
        }}
      />
    )}
    screenOptions={({navigation, route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        const sizeIcon = focused ? 30 : 25;
        const tintColor = focused ? R.colors.active : R.colors.inactive;
        return (
          <FastImage
            source={TabBarIcon[route.name]}
            style={{
              width: sizeIcon,
              height: sizeIcon,
            }}
            tintColor={tintColor}
          />
        );
      },
    })}>
    {Object.keys(StackBottomBar).map((elem, index) => (
      <Tab.Screen key={index} name={elem} component={StackBottomBar[elem]} />
    ))}
  </Tab.Navigator>
);

export default connect()((props) => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationUtil.setTopLevelNavigator(navigatorRef);
      }}
      children={
        <Stack.Navigator
          headerMode="none"
          children={<Stack.Screen name={SCREEN_ROUTER.MAIN} component={Main} />}
        />
      }
    />
  );
});
