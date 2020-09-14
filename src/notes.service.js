import { createUUID } from './helpers/uuid.helper';
import { ObservableArrayFactory } from './observableArray';

export class Note {
  constructor({ text, createdAt, updatedAt }) {
    this.id = createUUID();
    this.text = text || '';
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || null;
    this.title = text ? this.getTitle(text) : 'New note';
  }

  getTitle = (text) => {
    const lineEndIndex = text.indexOf('\n');
    if (lineEndIndex == -1) return text;
    const title = text.slice(0, lineEndIndex + 1);
    return title;
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