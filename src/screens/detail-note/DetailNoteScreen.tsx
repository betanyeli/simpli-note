import { View, Text } from 'react-native';
import React from 'react';
import styles from './DetailNoteScreen.styles';
import useThemedStyles from '../../hooks/theme/useThemedStyles';
import Separator from '../../components/atoms/separator/Separator';
import getRandomTag from '../../helpers/getRandomTag';
import tags from '../../dummyData/tags';
import getFormatDate from '../../helpers/getFormatDate';

const DetailNoteScreen = ({ route }: any) => {
  const style = useThemedStyles(styles);
  const { note } = route.params;
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={[style.fontFamily, style.headerTexts]}>{getFormatDate(note?.date)}</Text>
        <Text style={[style.fontFamily, style.headerTexts]}>{`#${getRandomTag(tags)}`}</Text>
      </View>
      <Separator />
      <Text style={[style.fontFamily, style.title]}>{note.title}</Text>
      <Text style={[style.fontFamily, style.body]}>{note.body}</Text>
    </View>
  );
};

export default DetailNoteScreen;
