import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {logout} from '../../utils/logout';
import {colors} from '../../variables';

export default Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: colors.error,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Logout"
        onPress={logout}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
