import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import cover from '../../assets/images/login-cover.png';
import logo from '../../assets/images/logo-rounded.png';
import fbLogo from '../../assets/images/fb-login.png';
import googleLogo from '../../assets/images/google-login.png';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputWithError from '../../components/custom-input';
import {login} from '../../api/auth/login';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/Auth';

// Validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Password too short').required('Required'),
});

const Login = () => {
  const navigation = useNavigation();
  const {authStatusLogin} = useAuth();

  const handleLogin = async values => {
    const {email, password} = values;
    try {
      await login(email, password).then(res => {
        authStatusLogin(res);
      });
    } catch (error) {
      console.log(error);
      console.error('Invalid credentials. Please, try again.');
    }
  };

  const handleNavigation = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={cover} />
      </View>
      <Image style={styles.logo} source={logo} />
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.formContent}>
            <InputWithError
              id="emailInput"
              name="email"
              label="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <InputWithError
              id="passwordInput"
              name="password"
              label="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />

            <TouchableOpacity style={styles.buttonTransparent}>
              <Text style={styles.textButton}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              title="Login">
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity
        onPress={() => handleNavigation('Register')}
        style={styles.buttonBorder}>
        <Text style={styles.textButton}>Register with Email</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>O</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.oauthContainer}>
        <TouchableOpacity style={styles.oauthButton}>
          <Image style={styles.oauthLogo} source={fbLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.oauthButton}>
          <Image style={styles.oauthLogo} source={googleLogo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
