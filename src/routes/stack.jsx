import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../components/navigation';
import Register from '../screens/register';
import Login from '../screens/login';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="HomeTabs" component={TabNavigator} />
    </AppStack.Navigator>
  );
};
