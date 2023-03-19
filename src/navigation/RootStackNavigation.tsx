import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import { RootStackParamList } from './RootStackNavigationTypes';
import AddNoteScreen from '../screens/add-note/AddNoteScreen';
import DetailNoteScreen from '../screens/detail-note/DetailNoteScreen';
import { Button } from 'react-native';
import useNotes from '../hooks/services/useNotes';

function RootStackNavigation() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const { writeItemToStorage } = useNotes();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <RootStack.Screen name="AddNote" component={AddNoteScreen} options={({ navigation, route }) => ({
        headerLeft: () => (
          <Button onPress={async () => {
            try {
              await writeItemToStorage();
            } catch (error) {
              console.log('err', error)
            } finally {
              navigation.goBack();
            }
          }} title="Back?" />
        ),
      })} />
      <RootStack.Screen name="DetailNote" component={DetailNoteScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigation;
