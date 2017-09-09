const monthNames = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
}

function getDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  return `${day}-${month}-${year}`;
}

export { getTime, getDate };
