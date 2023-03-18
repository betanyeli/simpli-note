import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './AddNoteScreen.styles';
import TextArea from '../../components/atoms/textArea/TextArea';
import Button, { ButtonVariant } from '../../components/atoms/button/Button';
import useThemedStyles from '../../hooks/theme/useThemedStyles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export type Note = {
  title: string;
  body: string;
  date: Date;
  onPress: () => void;
};

const AddNoteScreen = () => {
  const style = useThemedStyles(styles);
  const { setItem } = useAsyncStorage('@notes');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const emptyInputs = title === '' && body === '';

  const resetInputs = () => {
    setTitle('');
    setBody('');
  };

  const [newData, setNewData] = useState({
    title: 'Lorem',
    onPress: () => {},
    date: new Date(),
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima recusandae, facilis similique eum asperiores pariatur eos ipsam fuga aspernatur rem blanditiis! Deleniti nam vero maiores officiis. Fugit, numquam temporibus?',
  });
  const { getItem } = useAsyncStorage('@notes');

  const readItemFromStorage = async () => {
    const data = await getItem();
    data && setNewData(JSON.parse(data));
    console.log('fata', data);
  };

  useEffect(() => {
    readItemFromStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const writeItemToStorage = async () => {
    try {
      const parsedItems = {
        title,
        body,
        date: new Date(),
        onPress: () => {},
      };
      const mergedItems = JSON.stringify([newData, parsedItems]);
      console.log('se muroo', mergedItems);
      await setItem(mergedItems);
      resetInputs();
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <Text>AddNoteScreen</Text>
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
          label={'Save note'}
          onPress={() => writeItemToStorage()}
          variant={ButtonVariant.PRIMARY}
          icon={''}
          disabled={emptyInputs}
          loading={loading}
        />
        <Button
          label={'Clear'}
          onPress={resetInputs}
          variant={ButtonVariant.PRIMARY}
          icon={''}
          disabled={emptyInputs}
        />
      </View>
    </View>
  );
};

export default AddNoteScreen;
