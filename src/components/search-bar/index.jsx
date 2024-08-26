import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ICONS} from '../../icons';
import SearchIcon from '../../icons/SearchIcon';

export default SearchBar = ({placeholder, onChangeText}) => {
  const Template = ICONS['search'];

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <SearchIcon stroke="black" width={25} height={25} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
