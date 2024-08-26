import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SearchBar from '../../components/search-bar';

export default Home = props => {
  const handleSearch = value => {
    console.log('SEARCH: ', value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar placeholder={'Search'} onChangeText={handleSearch} />
        <Text style={styles.title}>UPCOMING EVENTS</Text>
      </View>
    </SafeAreaView>
  );
};
