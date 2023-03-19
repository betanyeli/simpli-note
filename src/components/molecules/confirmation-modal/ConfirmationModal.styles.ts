import { StyleSheet } from 'react-native';

export const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    commonStyle: {
      fontFamily: theme.typography.fontFamily.default,
      textAlign: 'center',
    },
    viewContainer: { backgroundColor: 'white', padding: 30, borderRadius: 10 },
    message: { fontSize: theme.typography.size.S, marginBottom: 10 },
    title: { fontSize: theme.typography.size.M, marginBottom: 10 },
    buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  });

export default styles;
