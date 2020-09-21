import './styles.css';

export const createNoteElement = ({ title, id, timestamp, textPreview, isSelected, onClick }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'note';
  rootElement.setAttribute('id', id);
  if (isSelected) {
    rootElement.setAttribute('selected', true);
    rootElement.setAttribute('animated', true);
    setTimeout(() => {
      rootElement.setAttribute('animated', false);
    }, 0)
  }
  rootElement.addEventListener('click', onClick);

  const headerElement = document.createElement('div');
  headerElement.className = 'header';
  headerElement.innerHTML = title;
  rootElement.appendChild(headerElement);

  const contentElement = document.createElement('div');
  contentElement.className = 'content';

  const timestampElement = document.createElement('div');
  timestampElement.className = 'timestamp';
  timestampElement.innerHTML = timestamp;
  contentElement.appendChild(timestampElement);

  const previewElement = document.createElement('div');
  previewElement.className = 'preview';
  previewElement.innerHTML = textPreview;
  contentElement.appendChild(previewElement);

  rootElement.appendChild(contentElement);
  return rootElement;
}