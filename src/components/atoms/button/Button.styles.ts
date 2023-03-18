import { StyleSheet } from 'react-native';

export const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.PRIMARY,
      alignItems: 'center',
      paddingHorizontal: theme.padding.S,
      paddingVertical: theme.padding.XS,
      borderRadius: theme.padding.XS,
      marginHorizontal: theme.padding.S,
      marginVertical: theme.padding.XS,
      flexDirection: 'row',
      justifyContent: 'center',
      maxWidth: 250,
    },
    label: {
      color: theme.colors.WHITE,
      fontWeight: '700',
      fontSize: theme.typography.S,
      fontFamily: theme.typography.fontFamily.default,
    },
    icon: {
      color: theme.colors.WHITE,
      fontWeight: '700',
      fontSize: theme.typography.M,
      fontFamily: theme.typography.fontFamily.icon,
      marginRight: theme.padding.XS,
    },
    opacity: { opacity: 0.6 },
    danger: {
      backgroundColor: 'red',
    },
  });

export default styles;
