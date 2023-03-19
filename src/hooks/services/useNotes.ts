import { useState, useEffect, useCallback } from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { generateId } from '../../helpers/generateId';
import { useNavigation } from '@react-navigation/native';

export type Note = {
  id: number;
  title: string;
  body: string;
  date: Date;
};

export enum InfoResponse {
  SUCCESS,
  ERROR,
}

const useNotes = () => {
  const { setItem, getItem } = useAsyncStorage('@notes');
  const navigation = useNavigation();
  const [newData, setNewData] = useState<Note[]>([
    {
      id: 1,
      title: 'Simpli Note',
      body: 'Add a custom note... ',
      date: new Date(),
    },
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showInfoResponse, setShowInfoResponse] = useState<InfoResponse | undefined>();

  const writeItemToStorage = async () => {
    try {
      setLoading(true);
      const parsedItems = {
        id: generateId(newData),
        title,
        body,
        date: new Date(),
      };
      const mergedItems = JSON.stringify([...newData, parsedItems]);
      console.log(mergedItems);
      newData && (await setItem(mergedItems));
      //setShowInfoResponse(InfoResponse.SUCCESS);
    } catch (error) {
      //setShowInfoResponse(InfoResponse.ERROR);
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);

      // navigation.goBack();
    }
  };

  const readItemFromStorage = async () => {
    const data = await getItem();
    data && setNewData(JSON.parse(data));
  };

  const emptyInputs = title === '' && body === '';

  const resetInputs = () => {
    setTitle('');
    setBody('');
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    readItemFromStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    title,
    setTitle,
    resetInputs,
    emptyInputs,
    loading,
    readItemFromStorage,
    writeItemToStorage,
    body,
    setBody,
    clearAll,
    newData,
    showInfoResponse,
  };
};

export default useNotes;
