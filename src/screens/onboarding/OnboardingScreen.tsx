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
      title: 'Lorem',
      onPress: () => {},
      date: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima recusandae, facilis similique eum asperiores pariatur eos ipsam fuga aspernatur rem blanditiis! Deleniti nam vero maiores officiis. Fugit, numquam temporibus?',
    },
    {
      title: 'Others',
      onPress: () => {},
      date: new Date(),
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex',
    },
    {
      title: 'Europe',
      onPress: () => {},
      date: new Date(),
      body: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa',
    },
    {
      title: 'Pendings',
      onPress: () => {},
      date: new Date(),
      body: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The',
    },
  ];
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.container]}>
        <Header />
        <Separator />
        <OnboardingTitle total={data.length} />
        <TagSlider data={data} />
        <Separator />
        <NotesSlider data={notes} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
