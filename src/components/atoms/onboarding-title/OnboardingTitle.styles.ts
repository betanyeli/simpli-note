import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
  },
  firstLabel: { fontFamily: 'Manrope', fontSize: 40, marginHorizontal: 40, color: '#131313' },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },
  secondLabel: {
    fontFamily: 'Manrope',
    textAlign: 'right',
    fontSize: 40,
    marginRight: 30,
    color: '#131313',
  },
  count: {
    color: 'grey',
  },
});

export default styles;
