import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Yup from 'yup';
import React from 'react';
import {styles} from './styles';
import InputWithError from '../../../components/custom-input';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../../variables';

const RegisterSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, 'Company name is too short')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Password too short').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  phone: Yup.string().min(10, 'Phone number too short').required('Required'),
  cif: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('Required'),
});

const initialValues = {
  companyName: '',
  email: '',
  password: '',
  repeatPassword: '',
  phone: '',
  cif: '',
  address: '',
  terms: false,
};

export default CompanyForm = ({handleRegister}) => {
  return (
    <KeyboardAwareScrollView
      style={styles.scrollContainer}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}>
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
            <View style={[styles.formContent]}>
              <InputWithError
                id="companyNameInput"
                name="companyName"
                label="Company Name"
                onChangeText={handleChange('companyName')}
                onBlur={handleBlur('companyName')}
                value={values.companyName}
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
              <InputWithError
                id="cifInput"
                name="cif"
                label="Cif"
                onChangeText={handleChange('cif')}
                onBlur={handleBlur('cif')}
                value={values.cif}
              />
              <InputWithError
                id="addressInput"
                name="address"
                label="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
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
