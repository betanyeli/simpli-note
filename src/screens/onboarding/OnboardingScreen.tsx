import { View } from 'react-native';
import React from 'react';
import styles from './OnboardingScreen.styles';
import Separator from '../../components/atoms/separator/Separator';
import Header from '../../components/atoms/header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingTitle from '../../components/atoms/onboarding-title/OnboardingTitle';
import TagSlider from '../../components/molecules/tag-slider/TagSlider';
import NotesSlider from '../../components/molecules/notes-slider/NotesSlider';
import useNotes from '../../hooks/services/useNotes';

const data = [
  { tagName: 'personal', onPress: () => { } },
  { tagName: 'others', onPress: () => { } },
  { tagName: 'recipes', onPress: () => { } },
  { tagName: 'music', onPress: () => { } },
];

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  const { newData, readItemFromStorage } = useNotes();
  React.useEffect(() => {
    const unsubscribe = navigation?.addListener('focus', () => {
      readItemFromStorage();
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const goToAddNotes = () => navigation.navigate('AddNote')

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.container]}>
        <Header onPress={goToAddNotes} />
        <Separator />
        <OnboardingTitle total={newData.length} />
        <TagSlider data={data} />
        <Separator />
        <NotesSlider data={newData} goToAddNotes={goToAddNotes} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
