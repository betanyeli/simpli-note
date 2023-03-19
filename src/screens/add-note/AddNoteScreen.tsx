import { View } from 'react-native';
import React from 'react';
import styles from './AddNoteScreen.styles';
import TextArea from '../../components/atoms/textArea/TextArea';
import Button, { ButtonVariant } from '../../components/atoms/button/Button';
import useThemedStyles from '../../hooks/theme/useThemedStyles';
import useNotes from '../../hooks/services/useNotes';

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
  } = useNotes();


  return (
    <View style={style.container}>
      <TextArea
        maxLength={25}
        maxCharLimit={25}
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
    </View>
  );
};

export default AddNoteScreen;
