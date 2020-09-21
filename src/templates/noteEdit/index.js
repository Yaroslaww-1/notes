import './styles.css';

export const createNoteEditElement = ({ note, isEditable = false, onNoteEdit }) => {
  const rootElement = document.createElement('textarea');
  rootElement.value = note?.text || '';
  rootElement.className = 'note-edit';
  if (!isEditable) {
    rootElement.setAttribute('disabled', true);
    rootElement.value = 'Select or add note and start editing';
    rootElement.classList.add('preview');
  };
  rootElement.addEventListener('input', () => {
    onNoteEdit(note, rootElement.value);
  });
  return rootElement;
}

export const setNoteEditElement = (newNoteEditElement) => {
  const oldElement = document.getElementsByClassName('note-edit')[0];
  oldElement.replaceWith(newNoteEditElement);
}