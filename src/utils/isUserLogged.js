import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

export const isUserLogged = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        return true;
      } else {
        await AsyncStorage.removeItem('access_token');
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking login status:', error);
  }
  return false;
};
