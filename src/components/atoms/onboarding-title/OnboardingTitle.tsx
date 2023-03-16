import {View, Text} from 'react-native';
import React from 'react';
import styles from './OnboardingTitle.styles';

const OnboardingTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstLabel}>Simpli</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.secondLabel}>Notes </Text>
        <Text>/10</Text>
      </View>
    </View>
  );
};

export default OnboardingTitle;
