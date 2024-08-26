import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator, AuthNavigator} from './stack';
import {useAuth} from '../context/Auth';
import {useEffect, useState} from 'react';

export const Router = () => {
  const {isLoggedIn} = useAuth();
  const [isTimeout, setIsTimeout] = useState(true);

  setTimeout(() => {
    setIsTimeout(false);
  }, 1000);

  if (isTimeout) return null;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
