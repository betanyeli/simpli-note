import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './TagSlider.styles';
import colors from '../../../styles/colors';

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
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={item.onPress} style={[styles.item, { backgroundColor: colors.MAINTENY_COLOR_PALETTE[index % colors.MAINTENY_COLOR_PALETTE.length] }]}>
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
