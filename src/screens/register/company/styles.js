import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../variables';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  formContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    display: 'flex',
    height: height - 340,
    width: '100%',
  },
  textButton: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  button: {
    width: '85%',
    height: 48,
    backgroundColor: colors.orange,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  checkboxContainer: {
    width: '85%',
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    width: '85%',
    marginBottom: 15,
  },
});
