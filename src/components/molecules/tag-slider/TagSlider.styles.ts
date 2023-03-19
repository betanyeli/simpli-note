import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    paddingHorizontal: 10,
  },
  itemTitle: { fontSize: 18, color: 'white' },
  container: { flexShrink: 2 },
  contentContainer: { flexGrow: 2, paddingBottom: 20 },
});

export default styles;
