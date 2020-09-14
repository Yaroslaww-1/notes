import './styles.css';

export const createNoteElement = ({ title, timestamp, textPreview }) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'note';

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