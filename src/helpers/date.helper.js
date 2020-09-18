export const getDayMonthYearFormat = (date) => {
  const formattedDate = date.toLocaleString('default', {
    month: 'long', year: 'numeric', day: 'numeric'
  });
  return formattedDate;
}