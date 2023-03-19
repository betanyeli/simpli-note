import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingsContainer: { flexDirection: 'row', alignItems: 'center' },
  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'grey',
    marginRight: 8,
  },
  greetingsPrefix: { fontFamily: 'Manrope', color: 'grey', fontSize: 16 },
  greetingsName: { fontFamily: 'Manrope', color: 'grey', fontWeight: '700' },
  button: { alignItems: 'center', padding: 4 },
  buttonLabel: { fontFamily: 'Manrope', fontSize: 16, color: '#131313' },
});

export default styles;
