import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignInScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  config 
);

export default createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
    {
      Main: MainTabNavigator,
    // Auth: AuthStack,
    },
  )
);
