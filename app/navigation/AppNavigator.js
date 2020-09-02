import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {UserScreen, HomeScreen} from '@screen';
import R from '@R';
import {SCREEN_ROUTER} from '@constant';

import {Image} from 'react-native';

const tabbarIcons = {
  [SCREEN_ROUTER.HOME]: R.images.ic_home,
  [SCREEN_ROUTER.USER]: R.images.ic_user,
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  const iconSource = tabbarIcons[routeName] || R.images.ic_home;
  const iconSize = focused ? 25 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{tintColor: tintColor, width: iconSize, height: iconSize}}
    />
  );
};

const TabBarComponent = (props) => <BottomTabBar {...props} />;

const Main = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      title: R.strings.home,
      navigationOptions: {
        tabBarLabel: R.strings.home,
      },
    },
    [SCREEN_ROUTER.USER]: {
      screen: UserScreen,
      title: R.strings.user,
      navigationOptions: {
        tabBarLabel: R.strings.user,
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeBackgroundColor: R.colors.bottombarBg,
      inactiveBackgroundColor: R.colors.bottombarBg,
      inactiveTintColor: R.colors.inactive,
      activeTintColor: R.colors.active,
    },
    tabBarComponent: (props) => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: R.colors.borderTopColor,
            backgroundColor: R.colors.primary,
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
      initialRouteName: 'Main',
    },
  ),
);
