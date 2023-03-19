import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './NotesSlider.styles';
import Separator from '../../atoms/separator/Separator';
import { leadingZero } from '../../../helpers/leadingZero';
import NotesSliderFooter from './NotesSliderFooter';
import useNotes, { Note } from '../../../hooks/services/useNotes';

type NotesSliderProps = {
  data: any;
  goToAddNotes: () => void;
};

const NotesSlider = ({ data, goToAddNotes }: NotesSliderProps) => {
  const { readItemFromStorage, loading, clearAll } = useNotes();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        keyExtractor={(item: Note) => String(item?.id)}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={item.onPress} style={styles.item}>
            {index + 1 > 0 && <Text style={styles.index}>{`${leadingZero(index + 1)}/`}</Text>}
            <View style={styles.titleContainer}>
              <Text style={styles.itemTitle}>{item?.title}</Text>
              <Text style={styles.iconItemTitle}></Text>
            </View>
            <Text numberOfLines={2}>{item?.body}</Text>
            <Separator />
          </TouchableOpacity>
        )}
        onRefresh={() => readItemFromStorage()}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<NotesSliderFooter onPress={clearAll} data={data} goToAddNotes={goToAddNotes} />}
      />
    </View>
  );
};

export default NotesSlider;
