import {Text, FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './NotesSlider.styles';
import Separator from '../../atoms/separator/Separator';

type Note = {
  title: string;
  onPress: () => void;
  body: string;
  tag?: string;
  date: Date;
};

type NotesSliderProps = {
  data: Note[];
};

const NotesSlider = ({data}: NotesSliderProps) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={item.onPress} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NotesSlider;
