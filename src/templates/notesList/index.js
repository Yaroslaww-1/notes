import { createNoteElement } from "../note";

export const createNotesListElement = ({ notes }) => {
  const rootElement = document.createElement('div');
  notes.forEach(note => {
    const noteElement = createNoteElement(note);
    rootElement.appendChild(noteElement);
  });
  return rootElement;
}