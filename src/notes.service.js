import { ObservableArrayFactory } from './observableArray';

export class Note {
  constructor({ text, createdAt, updatedAt }) {
    this.id = Date.now();
    this.text = text;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || null;
    this.header = this.getHeader(text);
  }

  getHeader = (text) => {
    const header = text.slice(0, text.indexOf('\n'));
    return header;
  }
}

export class NotesService {
  constructor() {
    this.notes = ObservableArrayFactory([]);
  }
  addNote = (note) => {
    this.notes.push(note);
  }
}