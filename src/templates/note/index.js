import './styles.css';

const applyAnimation = (element) => {
  element.setAttribute('animated', true);
  setTimeout(() => {
    element.setAttribute('animated', false);
  }, 0);
}

export const createNoteElement = ({ title, id, timestamp, textPreview, isSelected, onClick, withAnimation }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'note';
  rootElement.setAttribute('id', id);
  if (isSelected) {
    rootElement.setAttribute('selected', true);
    if (withAnimation) applyAnimation(rootElement);
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