import './index.css';

import { NotesService } from './services/NotesService/notes.service';
import { Note } from './services/NotesService/note';
import { createRootElement, setRootElement } from './templates/root';

const notesService = new NotesService();

const RootElementFactory = (params) => {
  const rootElement = createRootElement({
    notes: notesService.notes,
    onNoteCreate: () => notesService.addNote(new Note({ text: 'New note' })),
    onNoteDelete: () => notesService.deleteSelectedNote(),
    onNoteSelect: (note) => notesService.selectNote(note),
    ...params
  });
  return rootElement;
};

notesService.subscribe('updateNotes', (data) => {
  console.log('event', data);
  setRootElement(RootElementFactory());
});

setRootElement(RootElementFactory());
