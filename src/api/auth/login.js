import {http} from '../../variables';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${http.baseUrl}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log('BLA');

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const {access} = await response.json();
    try {
      return access;
    } catch (e) {
      console.error('Error saving access token to AsyncStorage:', e);
    }
  } catch (error) {
    console.error(error);
    console.error('Invalid credentials. Please, try again.');
  }
};
