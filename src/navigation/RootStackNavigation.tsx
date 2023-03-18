import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import ListNotesScreen from '../screens/list-notes/ListNotesScreen';
import { RootStackParamList } from './RootStackNavigationTypes';
import AddNoteScreen from '../screens/add-note/AddNoteScreen';

function RootStackNavigation() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <RootStack.Screen name="ListNotes" component={ListNotesScreen} />
      <RootStack.Screen name="AddNote" component={AddNoteScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigation;
