import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Header.styles';

type HeaderProps = {
  onPress: () => void;
};

const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <View style={styles.profilePlaceholder} />
        <Text style={styles.greetingsPrefix}>
          Hallo,
          <Text style={styles.greetingsName}>Beta</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonLabel}></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
