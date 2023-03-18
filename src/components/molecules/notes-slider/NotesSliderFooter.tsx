import { View } from 'react-native';
import React from 'react';
import styles from './NotesSlider.styles';
import Button, { ButtonVariant } from '../../atoms/button/Button';

type NotesSliderFooterProps = {
  onPress: () => void;
};
const NotesSliderFooter = ({ onPress }: NotesSliderFooterProps) => {
  return (
    <View style={styles.footer}>
      <Button variant={ButtonVariant.DANGER} label="Clear" onPress={onPress} icon="" />
    </View>
  );
};

export default NotesSliderFooter;
