export const getIdFromUrl = (url) => {
  const urlParams = new URLSearchParams(url);
  const idParam = urlParams.get('id');
  return idParam;
}

export const setIdParam = (url, id, changeUrlParams) => {
  const urlParams = new URLSearchParams(url);
  urlParams.set('id', id);
  changeUrlParams(urlParams);
}