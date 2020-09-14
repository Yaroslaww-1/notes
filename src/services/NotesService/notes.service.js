import { EventManager } from '../../helpers/events.helper';
import { Note } from './note';

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
    this.notes = this.notes.map((_note) =>
      _note.id === note.id ? note :_note
    );
    this.notify('updateNotes', this.notes);
  };

  getSelectedNote = () => {
    return this.notes.find(
      note => note.isSelected
    );
  }

  #unselectAll = () => {
    this.notes = this.notes.map(note => {
      note.unselect();
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
