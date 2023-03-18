import { StyleSheet } from 'react-native';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    textArea: {
      borderRadius: 12,
      marginHorizontal: theme.padding.M,
      marginVertical: theme.padding.XS,
    },
    textAreaTitle: { height: 60 },
    buttonContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
  });

export default styles;
