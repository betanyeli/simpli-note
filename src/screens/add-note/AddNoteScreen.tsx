import { View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './AddNoteScreen.styles';
import TextArea from '../../components/atoms/textArea/TextArea';
import Button, { ButtonVariant } from '../../components/atoms/button/Button';
import useThemedStyles from '../../hooks/theme/useThemedStyles';
import useNotes, { InfoResponse } from '../../hooks/services/useNotes';
import Snackbar from '../../components/atoms/snackbar/Snackbar';
import isIOS from '../../helpers/platforms';

const AddNoteScreen = ({ navigation }: any) => {
  const style = useThemedStyles(styles);
  const {
    emptyInputs,
    writeItemToStorage,
    title,
    setTitle,
    body,
    setBody,
    resetInputs,
    loading,
    showInfoResponse,
  } = useNotes();

  const snackbarLabel =
    showInfoResponse === InfoResponse.SUCCESS ? 'Note successfully saved' : ' Try again';
  const paddingBottomIos = isIOS && { bottom: 4 };

  useEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <View style={paddingBottomIos}>
          <Button onPress={() => saveAndGoBack()} label="Back" variant={ButtonVariant.PRIMARY} />
        </View>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const saveAndGoBack = async () => {
    await writeItemToStorage();
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <TextArea
        maxLength={50}
        maxCharLimit={50}
        style={[style.textAreaTitle, style.textArea]}
        defaultCharCount={0}
        placeholderTextColor="grey"
        exceedCharCountColor="#990606"
        placeholder={'Title'}
        value={title}
        onChangeText={(newText) => setTitle(newText)}
      />
      <TextArea
        maxLength={500}
        maxCharLimit={500}
        style={style.textArea}
        defaultCharCount={0}
        placeholderTextColor="grey"
        exceedCharCountColor="#990606"
        placeholder={'Add your Simpli-Note'}
        value={body}
        onChangeText={(newText) => setBody(newText)}
      />
      <View style={style.buttonContainer}>
        <Button
          label={!loading ? 'Save note' : 'Saving note'}
          onPress={() => writeItemToStorage()}
          variant={ButtonVariant.PRIMARY}
          icon={''}
          disabled={emptyInputs || loading}
          loading={loading}
        />
        <Button
          label={'Clear'}
          onPress={resetInputs}
          variant={ButtonVariant.PRIMARY}
          icon={''}
          disabled={emptyInputs || loading}
        />
      </View>

      {showInfoResponse && <Snackbar showInfoResponse={showInfoResponse} label={snackbarLabel} />}
    </View>
  );
};

export default AddNoteScreen;
