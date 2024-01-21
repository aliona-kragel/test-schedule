export const DEFAULT_START_HOURS = 7;
export const DEFAULT_START_MINUTES = 0;

export const dataPrettier = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

const formatTime = (date) => {
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export const getStartTime = () => {
  const startTime = new Date();
  startTime.setHours(DEFAULT_START_HOURS, DEFAULT_START_MINUTES, 0, 0);
  return formatTime(startTime);
}

export const getEndTime = (timestamp, hoursPerDay) => {
  const endTime = new Date();
  endTime.setHours(DEFAULT_START_HOURS, DEFAULT_START_MINUTES + (timestamp * hoursPerDay), 0, 0);
  console.log(hoursPerDay);
  return formatTime(endTime);
}

