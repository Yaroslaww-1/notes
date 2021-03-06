export const getIdFromUrl = (url) => {
  const urlParams = new URLSearchParams(url);
  const idParam = urlParams.get('id') || '';
  const idParamsParts = idParam.split('_');
  const id = idParamsParts[idParamsParts.length - 1];
  return id;
}

export const setIdParam = (url, id, changeUrlParams) => {
  const urlParams = new URLSearchParams(url);
  urlParams.set('id', id);
  changeUrlParams(urlParams);
}

export const updateIdParam = (url, newId, updateUrlParams) => {
  updateUrlParams('?id=' + newId);
}

export const getNoteUrl = (note) => {
  return `${note.getTitle()}_${note.id}`;
}