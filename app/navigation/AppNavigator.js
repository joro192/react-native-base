import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';

import {
    Image
} from "react-native";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  const iconSource = require('../assets/images/ic_home.png');
  const iconSize = focused ? 25 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{tintColor: tintColor, width: iconSize, height: iconSize}}
    />
  );
};

const TabBarComponent = props => <BottomTabBar {...props} />;

const Main = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      title: 'Home',
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    User: {
      screen: UserScreen,
      title: 'User',
      navigationOptions: {
        tabBarLabel: 'User',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeBackgroundColor: 'red',
      inactiveBackgroundColor: 'black',
      inactiveTintColor: 'yellow',
      activeTintColor: 'blue',
    },
    tabBarComponent: (props) => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: 'red',
            backgroundColor: 'white',
            height: 58,
          }}
        />
      );
    },
    initialRouteName: 'Home',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: Main,
    },
    {
      initialRouteName: "Main",
    },
  ),
);
