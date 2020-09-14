export const getDayMonthYearFormat = (date) => {
  const isosFormat = date.toISOString();
  const dayMonthYearFormat = isosFormat.split('T')[0];
  return dayMonthYearFormat;
}