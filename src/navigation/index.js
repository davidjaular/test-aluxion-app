import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {transitionX, transitionY} from '../helpers/transitions';
import HomeView from './HomeView';
import UserView from './UserView';
import PhotoView from './PhotoView';

const Stack = createStackNavigator();

const Navigation = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeView} />
    <Stack.Screen
      name="Photo"
      options={{
        cardStyleInterpolator: transitionY,
      }}
      component={PhotoView}
    />
    <Stack.Screen
      name="User"
      options={{
        cardStyleInterpolator: transitionX,
      }}
      component={UserView}
    />
  </Stack.Navigator>
);

export default Navigation;
