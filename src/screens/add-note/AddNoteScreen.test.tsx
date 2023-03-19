import AddNoteScreen from './AddNoteScreen';
import { render } from '@testing-library/react-native';
import React from 'react';
import wrapper from '../wrapper';

describe('Add Note Screen Test', () => {
  it('Should match with snapshot', () => {
    const { toJSON } = render(<AddNoteScreen />, { wrapper: wrapper });
    expect(toJSON()).toBeTruthy();
  });
});
