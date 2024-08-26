import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import * as Yup from 'yup';
import React from 'react';
import {styles} from './styles';
import InputWithError from '../../../components/custom-input';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../../variables';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short').required('Required'),
  lastName: Yup.string().min(2, 'Last name is too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Password too short').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  phone: Yup.string().min(10, 'Phone number too short').required('Required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('Required'),
});

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  phone: '',
  terms: false,
};

export default CustomerForm = ({handleRegister}) => {
  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enableOnAndroid={true}
      style={styles.scrollContainer}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            setFieldValue,
          }) => (
            <View style={styles.formContent}>
              <InputWithError
                id="nameInput"
                name="name"
                label="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <InputWithError
                id="lastNameInput"
                name="lastName"
                label="Last Name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              <InputWithError
                id="emailInput"
                name="email"
                label="Email"
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
              <InputWithError
                id="repeatPasswordInput"
                name="repeatPassword"
                label="Repeat Password"
                secureTextEntry
                onChangeText={handleChange('repeatPassword')}
                onBlur={handleBlur('repeatPassword')}
                value={values.repeatPassword}
              />
              <InputWithError
                id="phoneInput"
                name="phone"
                label="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={values.terms}
                  onValueChange={value => setFieldValue('terms', value)}
                  onCheckColor={colors.orange}
                  onTintColor={colors.orange}
                  tintColor="white"
                />
                <Text style={styles.label}>
                  I accept the terms and services
                </Text>
              </View>
              {touched.terms && errors.terms && (
                <Text style={styles.errorText}>{errors.terms}</Text>
              )}
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                title="Register">
                <Text style={styles.textButton}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
