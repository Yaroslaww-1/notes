import './styles.css';
import { createNoteElement } from "../note";

export const createNotesListElement = ({ notes, onNoteSelect, withAnimation = false }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'notes-list';
  notes.forEach(note => {
    const noteElement = createNoteElement({
      ...note,
      title: note.getTitle(),
      textPreview: note.getTextPreview(),
      timestamp: note.getTimestamp(),
      onClick: () => onNoteSelect(note),
      withAnimation,
    });
    rootElement.appendChild(noteElement);
  });
  return rootElement;
}

export const setNotesListElement = (newNotesListElement) => {
  const oldElement = document.getElementsByClassName('notes-list')[0];
  oldElement.replaceWith(newNotesListElement);
}