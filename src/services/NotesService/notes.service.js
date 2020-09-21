import { EventManager } from '../../helpers/events.helper';
import { NoteStorage } from '../StorageService/noteStorage.service';

export class NotesService extends EventManager {
  constructor() {
    super();
    this.storage = new NoteStorage();
    this.#unselectAll();
  }

  getAllNotes = () => {
    const notes = this.storage.getAll();
    return notes;
  }

  addNote = (note) => {
    this.#unselectAll();
    this.storage.add(note);
    this.selectNote(note);
    this.#sortNotes();
    this.notify('updateNotes');
  }

  deleteNote = (note) => {
    this.storage.deleteById(note.id);
    this.notify('updateNotes');
  };

  deleteSelectedNote = () => {
    const selectedNote = this.getSelectedNote();
    if (selectedNote) {
      this.storage.deleteById(selectedNote.id);
      this.notify('updateNotes');
    }
  }

  selectNote = (note) => {
    this.#unselectAll();
    note.isSelected = true;
    this.updateNoteById(note.id, note);
    this.notify('updateNoteEdit');
  };

  selectNoteById = (id) => {
    this.#unselectAll();
    const note = this.storage.get({ id });
    if (!note) return;
    note.isSelected = true;
    this.storage.updateById(id, note);
    this.notify('updateNotesList', { notificationType: 'select' });
    this.notify('updateNoteEdit');
  };

  getSelectedNote = () => {
    const note = this.storage.get({ isSelected: true });
    return note;
  }

  updateNoteById = (id, newNote) => {
    newNote.updatedAt = new Date();
    this.storage.updateById(id, newNote);
    this.#sortNotes();
    this.notify('updateNotesList', { notificationType: 'updateNotePreview' });
  }

  #unselectAll = () => {
    let notes = this.storage.getAll();
    notes = notes.map(note => {
      note.isSelected = false;
      return note;
    });
    this.storage.setAll(notes);
    this.notify('updateNotes');
  }

  #sortNotes = () => {
    const notes = this.storage.getAll();
    notes.sort((note1, note2) => 
      new Date(note2.getFullTimestamp()) - new Date(note1.getFullTimestamp())
    );
    this.storage.setAll(notes);
  }
}
