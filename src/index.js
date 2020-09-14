import './index.css';

import { Note, NotesService } from './notes.service';
import { createRootElement, setRootElement } from './templates/root';

const notesService = new NotesService();
notesService.notes.observe(({ payload }) => {
  setRootElement(
    createRootElement({
      notes: notesService.notes.array,
      selectedNote: payload,
      onNoteCreate: () => notesService.addNote(new Note({ text: 'New note' })),
    })
  );
}).filterByType('push');

setRootElement(
  createRootElement({
    notes: notesService.notes.array,
    selectedNote: null,
    onNoteCreate: () => notesService.addNote(new Note({ text: 'New note' })),
  })
);