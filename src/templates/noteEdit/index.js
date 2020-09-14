import './styles.css';

export const createNoteEditElement = () => {
  const rootElement = document.createElement('div');
  rootElement.className = 'note-edit';
  return rootElement;
}