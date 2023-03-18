import React, { createContext } from 'react';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import padding from '../../styles/padding';

export const ThemeContext = createContext<any>(null);

/**
 *
 *TO DO
 * Type this component
 */

const ThemeProvider = ({ children }: any) => {
  const theme = {
    colors: colors,
    typography,
    padding,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
