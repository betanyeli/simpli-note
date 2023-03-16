import {View, Text} from 'react-native';
import React from 'react';
import styles from './OnboardingTitle.styles';

type OnboardingTitleProps = {
  total?: number;
};

const OnboardingTitle = ({total}: OnboardingTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstLabel}>Simpli</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.secondLabel}>Notes </Text>
        {total && <Text>{`${total}/`}</Text>}
      </View>
    </View>
  );
};

export default OnboardingTitle;
