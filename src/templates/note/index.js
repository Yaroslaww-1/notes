export const createNoteElement = ({ title, timestamp, text }) => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `${title} ${timestamp} ${text}`;
  return rootElement;
}