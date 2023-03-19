import { StyleSheet } from 'react-native';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 16,
      backgroundColor: theme.colors.WHITE,
      paddingHorizontal: 24,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    fontFamily: {
      fontFamily: theme.typography.fontFamily.default,
      color: '#131313',
    },
    headerTexts: {
      fontSize: theme.typography.size.S,
    },
    title: {
      fontSize: theme.typography.size.XL,
      color: theme.colors.ELECTRIC_BLUE,
      textTransform: 'capitalize',
    },
    body: {
      fontSize: theme.typography.size.M,
    },
  });

export default styles;
