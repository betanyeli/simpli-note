import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ThemeProvider from '../hooks/theme/ThemeProvider'

const wrapper = ({ children }: never) => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                {children}
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default wrapper