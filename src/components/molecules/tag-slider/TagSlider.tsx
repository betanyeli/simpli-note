import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './TagSlider.styles';

type Tag = {
  tagName: string;
  onPress: () => void;
};

type TagSliderProps = {
  data: Tag[];
};

const TagSlider = ({ data }: TagSliderProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.onPress} style={styles.item}>
            <Text style={styles.itemTitle}>{`#${item.tagName}`}</Text>
          </TouchableOpacity>
        )}
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TagSlider;
