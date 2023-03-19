import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './NotesSlider.styles';
import Separator from '../../atoms/separator/Separator';
import { leadingZero } from '../../../helpers/leadingZero';
import NotesSliderFooter from './NotesSliderFooter';
import useNotes, { Note } from '../../../hooks/services/useNotes';
import { useNavigation } from '@react-navigation/native';

type NotesSliderProps = {
  data: any;
  goToAddNotes: () => void;
};

const NotesSlider = ({ data, goToAddNotes }: NotesSliderProps) => {
  const { readItemFromStorage, loading, clearAll } = useNotes();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        keyExtractor={(item: Note) => String(item?.id)}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailNote' as never, {
            note: item
          } as never)} style={styles.item}>
            {index + 1 > 0 && <Text style={styles.index}>{`${leadingZero(index + 1)}/`}</Text>}
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.itemTitle}>{item.title || 'Not found'}</Text>
              <Text style={styles.iconItemTitle}></Text>
            </View>
            <Text numberOfLines={3} style={styles.body}>{item?.body}</Text>
            <Separator />
          </TouchableOpacity>
        )}
        // onRefresh={async () => await readItemFromStorage()}
        // refreshing={loading || false}
        extraData={data}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<NotesSliderFooter onPress={clearAll} data={data} goToAddNotes={goToAddNotes} />}
      />
    </View>
  );
};

export default NotesSlider;
