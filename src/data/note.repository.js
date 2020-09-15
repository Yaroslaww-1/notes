import { Note } from "../services/NotesService/note";

export class NoteRepository {
  constructor() {}

  getAll = () => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.map(note => Note.fromJsonParsed(note));
    return notes;
  };

  add = (note) => {
    const notes = this.getAll();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  deleteById = (id) => {
    const notes = this.getAll().filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  get = (filter) => {
    const notes = this.getAll();
    const filteredNotes = notes.filter((note) => {
      const filterKeys = Object.keys(filter);
      const nonEqualKeys = filterKeys.filter(key => note[key] !== filter[key]);
      return nonEqualKeys.length === 0;
    });
    if (filteredNotes.length === 0) return null;
    const note = Note.fromJsonParsed(filteredNotes[0]);
    return note;
  }

  updateById = (id, newNote) => {
    let notes = this.getAll();
    notes = notes.map((note) => {
      if (note.id === id) note = newNote;
      return note;
    });
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  setAll = (newNotes) => {
    localStorage.setItem('notes', JSON.stringify(newNotes));
  }
}