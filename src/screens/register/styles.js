import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../variables';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.black,
  },
  coverContainer: {
    width: width,
    height: 236,
    marginBottom: 36,
  },
  cover: {
    width: width,
    height: '100%',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tab: {
    width: 'auto',
    alignItems: 'center',
  },
  activeTabText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  inactiveTabText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  activeTabIndicator: {
    height: 6,
    backgroundColor: '#f60',
    width: '100%',
    marginTop: 5,
  },
  form: {
    width: width,
    padding: 20,
  },
  formText: {
    color: '#fff',
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
