import './styles.css';

import { createHeader } from "../header";
import { createNotesListElement } from "../notesList";
import { createNoteEditElement } from '../noteEdit';

export const createRootElement = ({
  notes,
  onNoteCreate,
  onNoteDelete,
  onNoteSelect,
  onNoteEdit,
  isEditable,
  selectedNote,
}) => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'root');

  const headerElement = createHeader({ onNoteCreate, onNoteDelete });
  rootElement.appendChild(headerElement);

  const mainContentElement = document.createElement('div');
  mainContentElement.className = 'main-content';
  const notesListElement = createNotesListElement({ notes, onNoteSelect });
  mainContentElement.appendChild(notesListElement);

  const noteEditElement = createNoteEditElement({
    note: selectedNote,
    isEditable,
    onNoteEdit,
  });
  mainContentElement.appendChild(noteEditElement);

  rootElement.appendChild(mainContentElement);

  return rootElement;
}

export const setRootElement = (newRootElement) => {
  const root = document.getElementById('root');
  root.replaceWith(newRootElement);
}
