import { EventManager } from '../../helpers/events.helper';

export class NotesService extends EventManager {
  constructor() {
    super();
    this.notes = [];
  }

  addNote = (note) => {
    this.#unselectAll();
    this.notes.push(note);
    this.selectNote(note);
    this.#sortNotes();
    this.notify('updateNotes', this.notes);
  }

  deleteNote = (note) => {
    this.notes.reduce((notes, _note) => 
      _note.id === note.id ? [notes, _note] : notes
    );
    this.notify('updateNotes', this.notes);
  };

  deleteSelectedNote = () => {
    const selectedNote = this.getSelectedNote();
    if (selectedNote) {
      this.notes = this.notes.filter(note => note.id !== selectedNote.id);
      this.notify('updateNotes', this.notes);
    }
  }

  selectNote = (note) => {
    this.#unselectAll();
    note.isSelected = true;
    this.updateNoteById(note.id, note);
  };

  getSelectedNote = () => {
    return this.notes.find(
      note => note.isSelected
    );
  }

  updateNoteById = (id, newNote) => {
    this.notes = this.notes.map((note) => {
      if (note.id === id) note = newNote;
      return note;
    });
    this.notify('updateNotes', this.notes);
  }

  #unselectAll = () => {
    this.notes = this.notes.map(note => {
      note.isSelected = false;
      return note;
    });
    this.notify('updateNotes', this.notes);
  }

  #sortNotes = () => {
    this.notes.sort((note1, note2) => 
      new Date(note2.getFullTimestamp()) - new Date(note1.getFullTimestamp())
    );
  }
}
