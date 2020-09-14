import { getDayMonthYearFormat } from '../../helpers/date.helper';
import { createUUID } from '../../helpers/uuid.helper';

export class Note {
  constructor({ text, createdAt, updatedAt, isSelected }) {
    this.id = createUUID();
    this.isSelected = isSelected || false;
    this.text = text || '';
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || null;
  }

  getTimestamp = () => {
    const timestamp = getDayMonthYearFormat(
      this.updatedAt ? this.updatedAt : this.createdAt
    );
    return timestamp;
  }

  getFullTimestamp = () => this.updatedAt ? this.updatedAt : this.createdAt;

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
  
  unselect = () => this.isSelected = false;
  select = () => this.isSelected = true;
}