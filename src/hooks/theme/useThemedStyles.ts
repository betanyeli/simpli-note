import useTheme from './useTheme';

/**
 *
 *TO DO
 * Type better this style
 */

const useThemedStyles = (styles: any) => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
