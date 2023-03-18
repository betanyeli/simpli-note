import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './navigation/RootStackNavigation';
import ThemeProvider from './hooks/theme/ThemeProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
