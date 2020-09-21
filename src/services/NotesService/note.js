import { getDayMonthYearFormat } from '../../helpers/date.helper';
import { createUUID } from '../../helpers/uuid.helper';

export class Note {
  constructor({
    text = '',
    createdAt = new Date(),
    updatedAt = null,
    isSelected = false,
    id = createUUID(),
  }) {
    this.id = id;
    this.isSelected = isSelected;
    this.text = text;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
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
    const preview = this.text.slice(0, PREVIEW_MAXIMUM_LENGTH).replace(/\n/g, ' ');
    return preview;
  }

  getTitle = () => {
    if (this.text === '') return 'New Note';
    const TITLE_MAXIMUM_LENGTH = 35;
    let title = '';
    if (this.text.includes('\n')) {
      const titleEndIndex = Math.min(this.text.indexOf('\n'), TITLE_MAXIMUM_LENGTH);
      title = this.text.slice(0, titleEndIndex + 1);
    } else {
      title = this.text.slice(0, TITLE_MAXIMUM_LENGTH);
    }
    return title;
  }
  
  unselect = () => this.isSelected = false;
  select = () => this.isSelected = true;

  static fromJsonParsed = (parsedJson) => {
    const { id, text, createdAt, updatedAt, isSelected } = parsedJson;
    const note = new Note({
      id,
      text,
      createdAt: new Date(createdAt),
      updatedAt: updatedAt && new Date(updatedAt),
      isSelected,
    });
    return note;
  }
}