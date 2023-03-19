import { View } from 'react-native';
import React from 'react';
import styles from './NotesSlider.styles';
import Button, { ButtonVariant } from '../../atoms/button/Button';

type NotesSliderFooterProps = {
  onPress: () => void;
  data: any;
  goToAddNotes: () => void;
};
const NotesSliderFooter = ({ onPress, data, goToAddNotes }: NotesSliderFooterProps) => {
  return (
    <View style={styles.footer}>
      {data ? (
        <Button variant={ButtonVariant.DANGER} label="Clear" onPress={onPress} icon="" />
      ) : (
        <Button
          label="Create a new note"
          variant={ButtonVariant.PRIMARY}
          onPress={goToAddNotes}
        />
      )}
    </View>
  );
};

export default NotesSliderFooter;
