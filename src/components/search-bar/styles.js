import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingRight: 20,
    paddingLeft: 60,
  },
  icon: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 20,
    elevation: 1,
    zIndex: 1,
  },
});
