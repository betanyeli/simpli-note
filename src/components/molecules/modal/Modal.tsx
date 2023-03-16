import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import styles from './Modal.styles';

type CustomModalProps = {
  modalVisible: boolean;
  onRequestClose: () => void;
  onPress: () => void;
  children: JSX.Element;
};

const CustomModal = ({ modalVisible, onRequestClose, onPress, children }: CustomModalProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              onPress={onRequestClose}
              style={{
                fontFamily: 'icomoon-free',
                textAlign: 'right',
                fontSize: 20,
              }}
            >
              
            </Text>

            {children}
            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onPress}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
