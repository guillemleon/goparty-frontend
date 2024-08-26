import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../variables';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  coverContainer: {
    width: width,
    height: 236,
  },
  cover: {
    width: width,
    height: '100%',
  },
  logo: {
    width: 78,
    height: 78,
    marginVertical: 37,
  },
  formContent: {
    width: '100%',
    alignItems: 'center',
  },
  buttonTransparent: {
    height: 29,
    width: '85%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  buttonBorder: {
    width: '85%',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  separatorContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    marginHorizontal: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#FFFFFF',
  },
  oauthContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oauthButton: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    marginTop: 15,
  },
  oauthLogo: {
    width: '100%',
    height: '100%',
  },
});
