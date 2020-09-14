import { createHeader } from "../header";
import { createNotesListElement } from "../notesList";

export const createRootElement = ({
  notes,
  selectedNote,
  onNoteCreate,
  onNoteDelete,
  onNoteEdit,
}) => {
  const rootElement = document.createElement('div');

  const headerElement = createHeader({ onNoteCreate, onNoteDelete });
  rootElement.appendChild(headerElement);

  const mainContentElement = document.createElement('div');
  const notesListElement = createNotesListElement({ notes });
  mainContentElement.appendChild(notesListElement);

  rootElement.appendChild(mainContentElement);

  return rootElement;
}

export const setRootElement = (newRootElement) => {
  const root = document.getElementById('root');
  const newRoot = document.createElement('div');
  newRoot.setAttribute('id', 'root');
  newRoot.appendChild(newRootElement);
  root.replaceWith(newRoot);
}
