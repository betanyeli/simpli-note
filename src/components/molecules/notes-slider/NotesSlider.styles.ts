import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: { flexGrow: 2, paddingVertical: 8 },
  container: { flexShrink: 2 },
  item: {
    paddingVertical: 6,
    marginHorizontal: 4,
    paddingHorizontal: 10,
  },
  itemTitle: { fontSize: 30, fontFamily: 'Manrope' },
  index: { fontFamily: 'Manrope', fontSize: 20, color: 'grey' },
  titleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  iconItemTitle: { fontFamily: 'icomoon-free', fontSize: 20 },
  footer: { alignItems: 'flex-end' },
});

export default styles;
