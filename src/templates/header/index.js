import './styles.css';

export const createHeader = ({ onNoteCreate, onNoteDelete }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'header';

  const createNoteButton = document.createElement('button');
  createNoteButton.innerHTML = 'Add note';
  createNoteButton.addEventListener('click', onNoteCreate);
  rootElement.appendChild(createNoteButton);

  const deleteNoteButton = document.createElement('button');
  deleteNoteButton.innerHTML = 'Delete note';
  deleteNoteButton.addEventListener('click', onNoteDelete);
  rootElement.appendChild(deleteNoteButton);

  return rootElement;
}