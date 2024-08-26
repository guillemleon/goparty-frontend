import {Image, View, Dimensions, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import cover from '../../assets/images/register-cover.png';
import CustomerForm from './customer/index';
import CompanyForm from './company/index';

const Register = () => {
  const [isCustomer, setIsCustomer] = useState(true);

  const toggleView = newView => {
    setIsCustomer(newView === 'customer');
  };

  const handleRegister = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={cover} />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => toggleView('customer')}
          style={styles.tab}>
          <Text
            style={isCustomer ? styles.activeTabText : styles.inactiveTabText}>
            CUSTOMER
          </Text>
          {isCustomer && <View style={styles.activeTabIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleView('company')}
          style={styles.tab}>
          <Text
            style={!isCustomer ? styles.activeTabText : styles.inactiveTabText}>
            COMPANY
          </Text>
          {!isCustomer && <View style={styles.activeTabIndicator} />}
        </TouchableOpacity>
      </View>

      <View style={[styles.sliderContainer]}>
        {isCustomer ? (
          <CustomerForm handleRegister={handleRegister} />
        ) : (
          <CompanyForm handleRegister={handleRegister} />
        )}
      </View>
    </View>
  );
};

export default Register;
