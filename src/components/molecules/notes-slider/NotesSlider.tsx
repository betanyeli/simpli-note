import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './NotesSlider.styles';
import Separator from '../../atoms/separator/Separator';
import { leadingZero } from '../../../helpers/leadingZero';

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

const NotesSlider = ({ data }: NotesSliderProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        keyExtractor={(item: Note) => item.title}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={item.onPress} style={styles.item}>
            {index + 1 > 0 && <Text style={styles.index}>{`${leadingZero(index + 1)}/`}</Text>}
            <View style={styles.titleContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.iconItemTitle}></Text>
            </View>

            <Text numberOfLines={2}>{item.body}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotesSlider;
