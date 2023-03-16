import {View} from 'react-native';
import React from 'react';
import styles from './OnboardingScreen.styles';
import Separator from '../../components/atoms/separator/Separator';
import Header from '../../components/atoms/header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import OnboardingTitle from '../../components/atoms/onboarding-title/OnboardingTitle';
import TagSlider from '../../components/molecules/tag-slider/TagSlider';
import NotesSlider from '../../components/molecules/notes-slider/NotesSlider';

const OnboardingScreen = () => {
  const data = [
    {tagName: 'personal', onPress: () => {}},
    {tagName: 'others', onPress: () => {}},
    {tagName: 'recipes', onPress: () => {}},
    {tagName: 'music', onPress: () => {}},
  ];

  const notes = [
    {
      title: 'personal',
      onPress: () => {},
      date: new Date(),
      body: '1 Lorem ipsum pipipi popopo guruguruguuuu',
    },
    {
      title: 'others',
      onPress: () => {},
      date: new Date(),
      body: '2 Lorem ipsum pipipi popopo guruguruguuuu',
    },
    {
      title: 'recipes',
      onPress: () => {},
      date: new Date(),
      body: '3 Lorem ipsum pipipi popopo guruguruguuuu',
    },
    {
      title: 'music',
      onPress: () => {},
      date: new Date(),
      body: '4 Lorem ipsum pipipi popopo guruguruguuuu',
    },
  ];
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.container]}>
        <Header />
        <Separator />
        <OnboardingTitle />
        <Separator />
        <TagSlider data={data} />
        <Separator />
        <NotesSlider data={notes} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
