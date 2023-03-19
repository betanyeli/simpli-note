import React from 'react';
import { View, Text, Modal } from 'react-native';
import useThemedStyles from '../../../hooks/theme/useThemedStyles';
import Button, { ButtonVariant } from '../../atoms/button/Button';
import styles from './ConfirmationModal.styles';

type ConfirmationModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};
const ConfirmationModal = ({
  visible,
  onClose,
  onConfirm,
  message,
  title,
}: ConfirmationModalProps) => {
  const style = useThemedStyles(styles);
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={style.container}>
        <View style={style.viewContainer}>
          <Text style={[style.commonStyle, style.title]}>{title}</Text>
          <Text style={[style.commonStyle, style.message]}>{message}</Text>
          <View style={style.buttonsContainer}>
            <Button
              onPress={onClose}
              label={'Go back'}
              variant={ButtonVariant.PRIMARY}
              icon={''}
            />
            <Button
              onPress={onConfirm}
              label={'Confirm'}
              variant={ButtonVariant.DANGER}
              icon={''}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
