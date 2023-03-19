import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './NotesSlider.styles';
import Button, { ButtonVariant } from '../../atoms/button/Button';
import ConfirmationModal from '../confirmation-modal/ConfirmationModal';

type NotesSliderFooterProps = {
  onPress: () => void;
  data: any;
  goToAddNotes: () => void;
};
const NotesSliderFooter = ({ onPress, data, goToAddNotes }: NotesSliderFooterProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleConfirm = () => {
    onPress();
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.footer}>
      {data.length > 1 ? (
        <Button
          variant={ButtonVariant.DANGER}
          label="Clear all the notes"
          onPress={() => setIsModalVisible(true)}
          icon={''}
        />
      ) : (
        <Button label="Create a new note" variant={ButtonVariant.PRIMARY} onPress={goToAddNotes} />
      )}
      <ConfirmationModal
        visible={isModalVisible}
        onClose={handleClose}
        onConfirm={handleConfirm}
        message="This action will delete all the notes"
        title="Are you sure?🥺"
      />
    </View>
  );
};

export default NotesSliderFooter;
