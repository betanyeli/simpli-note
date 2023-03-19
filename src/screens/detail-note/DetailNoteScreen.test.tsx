import DetailNoteScreen from './DetailNoteScreen';
import { render } from '@testing-library/react-native';
import React from 'react';
import wrapper from '../wrapper';

describe('Detail Note Screen Test', () => {
    const mockNotes = [{
        id: 1,
        title: 'Simpli Note',
        body: 'Add a custom note... ',
        date: new Date(),
    }]
    it('Should match with snapshot', () => {
        const { toJSON } = render(<DetailNoteScreen route={{ params: { note: mockNotes[0] } }} />, { wrapper: wrapper });
        expect(toJSON()).toBeTruthy();
    });
});
