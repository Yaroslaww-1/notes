import './styles.css';

export const createNoteEditElement = ({ note, isEditable = false, onNoteEdit }) => {
  const rootElement = document.createElement('textarea');
  rootElement.value = note?.text || '';
  rootElement.className = 'note-edit';
  if (!isEditable) rootElement.setAttribute('disabled', true);
  rootElement.addEventListener('input', () => {
    onNoteEdit(note, rootElement.value);
  });
  return rootElement;
}