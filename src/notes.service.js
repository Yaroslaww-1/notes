import { getDayMonthYearFormat } from './helpers/date.helper';
import { createUUID } from './helpers/uuid.helper';
import { ObservableArrayFactory } from './observableArray';

export class Note {
  constructor({ text, createdAt, updatedAt }) {
    this.id = createUUID();
    this.text = text || '';
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || null;
  }

  getTimestamp = () => {
    const timestamp = getDayMonthYearFormat(this.createdAt);
    return timestamp;
  }

  getTextPreview = () => {
    const PREVIEW_MAXIMUM_LENGTH = 25;
    const preview = this.text.slice(0, PREVIEW_MAXIMUM_LENGTH);
    return preview;
  }

  getTitle = () => {
    if (this.text === '') return 'New Note';
    const lineEndIndex = this.text.indexOf('\n');
    if (lineEndIndex == -1) return this.text;
    const title = this.text.slice(0, lineEndIndex + 1);
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