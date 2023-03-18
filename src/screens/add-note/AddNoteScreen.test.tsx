import AddNoteScreen from './AddNoteScreen';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Add Note Screen Test', () => {
  it('Should match with snapshot', () => {
    const { toJSON } = render(<AddNoteScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
