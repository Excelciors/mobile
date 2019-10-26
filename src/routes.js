import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Indication from './pages/Indication';
import Vocational from './pages/Vocational';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Home: createStackNavigator(
              {
                Dashboard,
                Indication,
                Vocational,
              },
              {
                headerMode: 'none',
                navigationOptions: {
                  headerVisible: false,
                },
              },
            ),
            Profile,
          },
          {
            tabBarOptions: {
              resetOnBlur: true,
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#10bed8',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
