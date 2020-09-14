import './index.css';

import { NotesService } from './services/NotesService/notes.service';
import { Note } from './services/NotesService/note';
import { createRootElement, setRootElement } from './templates/root';

const notesService = new NotesService();

const RootElementFactory = (params) => {
  const rootElement = createRootElement({
    notes: notesService.notes,
    selectedNote: notesService.getSelectedNote(),
    onNoteCreate: () => notesService.addNote(new Note({})),
    onNoteDelete: () => notesService.deleteSelectedNote(),
    onNoteSelect: (note) => notesService.selectNote(note),
    onNoteEdit: (note, newText) => {
      note.text = newText;
      notesService.updateNoteById(note.id, note)
    },
    isEditable: !!notesService.getSelectedNote(),
    ...params
  });
  return rootElement;
};

notesService.subscribe('updateNotes', () => {
  setRootElement(RootElementFactory());
});

setRootElement(RootElementFactory());
