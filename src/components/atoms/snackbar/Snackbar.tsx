import { Text, View } from 'react-native';
import React from 'react';
import { InfoResponse } from '../../../hooks/services/useNotes';
import styles from './Snackbar.styles';

type SnackbarProps = {
  showInfoResponse: InfoResponse;
  label: string;
};

const Snackbar = ({ showInfoResponse, label }: SnackbarProps) => {
  const shadowColor =
    showInfoResponse === InfoResponse.SUCCESS
      ? { shadowColor: '#47ce00' }
      : { shadowColor: '#ff4444' };
  return (
    <View style={[styles.container, shadowColor]}>
      <Text style={styles.label}>
        {`${showInfoResponse === InfoResponse.SUCCESS ? '✅' : '❗️'} ${label}`}{' '}
      </Text>
    </View>
  );
};

export default Snackbar;
