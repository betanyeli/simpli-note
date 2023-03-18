import { View } from 'react-native';
import React from 'react';
import styles from './OnboardingScreen.styles';
import Separator from '../../components/atoms/separator/Separator';
import Header from '../../components/atoms/header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingTitle from '../../components/atoms/onboarding-title/OnboardingTitle';
import TagSlider from '../../components/molecules/tag-slider/TagSlider';
import NotesSlider from '../../components/molecules/notes-slider/NotesSlider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  { tagName: 'personal', onPress: () => {} },
  { tagName: 'others', onPress: () => {} },
  { tagName: 'recipes', onPress: () => {} },
  { tagName: 'music', onPress: () => {} },
];

const notes = [
  {
    title: 'Lorem',
    onPress: () => {},
    date: new Date(),
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima recusandae, facilis similique eum asperiores pariatur eos ipsam fuga aspernatur rem blanditiis! Deleniti nam vero maiores officiis. Fugit, numquam temporibus?',
  },
];

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.container]}>
        <Header onPress={() => navigation.navigate('AddNote')} />
        <Separator />
        <OnboardingTitle total={data.length} />
        <TagSlider data={data} />
        <Separator />
        <NotesSlider data={notes} clearOnPress={clearAll} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
