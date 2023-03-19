import { Note } from '../hooks/services/useNotes';

export type RootStackParamList = {
  Onboarding: undefined;
  AddNote: undefined;
  DetailNote: { note: Note };
};
