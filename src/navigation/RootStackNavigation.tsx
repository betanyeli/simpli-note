import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import { RootStackParamList } from './RootStackNavigationTypes';
import AddNoteScreen from '../screens/add-note/AddNoteScreen';
import DetailNoteScreen from '../screens/detail-note/DetailNoteScreen';

function RootStackNavigation() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <RootStack.Screen
        name="AddNote"
        component={AddNoteScreen}
        options={{ title: 'Add a Simpli Note', headerTitleStyle: { fontFamily: 'Manrope' } }}
      />
      <RootStack.Screen
        name="DetailNote"
        component={DetailNoteScreen}
        options={{ title: 'Details' }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigation;
