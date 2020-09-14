import './styles.css';
import { createNoteElement } from "../note";

export const createNotesListElement = ({ notes, onNoteSelect }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'notes-list';
  notes.forEach(note => {
    const noteElement = createNoteElement({
      ...note,
      title: note.getTitle(),
      textPreview: note.getTextPreview(),
      timestamp: note.getTimestamp(),
      onClick: () => onNoteSelect(note),
    });
    rootElement.appendChild(noteElement);
  });
  return rootElement;
}