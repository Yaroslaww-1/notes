import './index.css';

import { NotesService } from './services/NotesService/notes.service';
import { Note } from './services/NotesService/note';
import { createRootElement, setRootElement } from './templates/root';
import { createNotesListElement, setNotesListElement } from './templates/notesList/index';
import { createNoteEditElement, setNoteEditElement } from './templates/noteEdit/index';
import { getIdFromUrl, getNoteUrl, setIdParam, updateIdParam } from './helpers/url.helper';

// Show usage of IIFE
(async () => {
  const notesService = new NotesService();

  const noteId = getIdFromUrl(window.location.search);
  if (noteId) notesService.selectNoteById(noteId);

  window.addEventListener('locationchange', () => {
    const noteId = getIdFromUrl(window.location.search);
    notesService.selectNoteById(noteId);
  });

  const onNoteSelect = (note) => {
    setIdParam(window.location.search, getNoteUrl(note), (params) => {
      window.location.search = params.toString();
    });
  }

  const RootElementFactory = (params) => {
    const rootElement = createRootElement({
      notes: notesService.getAllNotes(),
      selectedNote: notesService.getSelectedNote(),
      onNoteCreate: () => notesService.addNote(new Note({})),
      onNoteDelete: () => notesService.deleteSelectedNote(),
      onNoteSelect,
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
    updateIdParam(window.location.search, getNoteUrl(notesService.getSelectedNote()), (newParam) => {
      window.history.replaceState(null, null, newParam)
    });
    setNotesListElement(
      createNotesListElement({
        notes: notesService.getAllNotes(),
        onNoteSelect,
      })
    );
  });
  
  notesService.subscribe('updateNoteEdit', () => {
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
  });

  setRootElement(RootElementFactory());
})();
