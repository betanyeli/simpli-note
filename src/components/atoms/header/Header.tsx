import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './Header.styles';

type HeaderProps = {
  onPress: () => void;
};

const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Image style={styles.profilePlaceholder} source={{ uri: 'https://picsum.photos/200' }} />
        <Text style={styles.greetingsPrefix}>
          Hallo,
          <Text style={styles.greetingsName}>Beta</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonLabel}>Add note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
