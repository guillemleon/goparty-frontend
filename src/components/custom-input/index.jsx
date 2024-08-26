import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {useField} from 'formik';
import {styles} from './styles';

const InputWithError = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[
          styles.input,
          meta.touched && meta.error ? styles.errorInput : null,
        ]}
        placeholder={label}
        autoCapitalize="none"
      />
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

export default InputWithError;
