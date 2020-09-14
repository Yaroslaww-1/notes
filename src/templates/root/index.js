import './styles.css';

import { createHeader } from "../header";
import { createNotesListElement } from "../notesList";
import { createNoteEditElement } from '../noteEdit';

export const createRootElement = ({
  notes,
  selectedNote,
  onNoteCreate,
  onNoteDelete,
  onNoteSelect,
  onNoteEdit,
}) => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'root');

  const headerElement = createHeader({ onNoteCreate, onNoteDelete });
  rootElement.appendChild(headerElement);

  const mainContentElement = document.createElement('div');
  mainContentElement.className = 'main-content';
  const notesListElement = createNotesListElement({ notes, selectedNote, onNoteSelect, onNoteEdit });
  mainContentElement.appendChild(notesListElement);

  const noteEditElement = createNoteEditElement();
  mainContentElement.appendChild(noteEditElement);

  rootElement.appendChild(mainContentElement);

  return rootElement;
}

export const setRootElement = (newRootElement) => {
  const root = document.getElementById('root');
  root.replaceWith(newRootElement);
}
