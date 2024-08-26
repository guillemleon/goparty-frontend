import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../variables';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '85%',
    height: 48,
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  errorInput: {
    height: '100%',
    width: '100%',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
    color: colors.error,
    position: 'absolute',
    top: 5,
    right: 10,
    fontSize: 12,
  },
});
