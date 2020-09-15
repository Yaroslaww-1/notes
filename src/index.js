import './index.css';

import { NotesService } from './services/NotesService/notes.service';
import { Note } from './services/NotesService/note';
import { createRootElement, setRootElement } from './templates/root';
import { createNotesListElement, setNotesListElement } from './templates/notesList/index';
import { createNoteEditElement, setNoteEditElement } from './templates/noteEdit/index';

(async () => {
  const notesService = new NotesService();

  const RootElementFactory = (params) => {
    const rootElement = createRootElement({
      notes: notesService.getAllNotes(),
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
  
  notesService.subscribe('updateNotesList', () => {
    setNotesListElement(
      createNotesListElement({
        notes: notesService.getAllNotes(),
        onNoteSelect: (note) => notesService.selectNote(note),
      })
    );
  })
  
  notesService.subscribe('updateNoteEdit', () => {
    console.log(notesService.getSelectedNote());
    setNoteEditElement(
      createNoteEditElement({
        note: notesService.getSelectedNote(),
        isEditable: true,
        onNoteEdit: (note, newText) => {
          note.text = newText;
          notesService.updateNoteById(note.id, note)
        },
      })
    );
  })
  
  setRootElement(RootElementFactory());
})();
