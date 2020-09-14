import './styles.css';
import { createNoteElement } from "../note";

export const createNotesListElement = ({ notes }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'notes-list';
  notes.forEach(note => {
    const noteElement = createNoteElement({
      title: note.getTitle(),
      textPreview: note.getTextPreview(),
      timestamp: note.getTimestamp(),
    });
    rootElement.appendChild(noteElement);
  });
  return rootElement;
}