import { daysIndex } from "../data";
import { addDays } from 'date-fns';

export const DEFAULT_START_HOURS = 7;
export const DEFAULT_START_MINUTES = 0;
export const CURRENT_DATE = new Date();

export const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export const getStartDate = () => {
  return formatDate(CURRENT_DATE)
}

export const getEndDate = (totalHours, hoursPerDay) => {
  const endDate = new Date(CURRENT_DATE);
  endDate.setDate(CURRENT_DATE.getDate() + (totalHours / hoursPerDay));

  return formatDate(endDate);
}

const formatTime = (date) => {
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export const getStartTime = () => {
  const startTime = new Date();
  startTime.setHours(DEFAULT_START_HOURS, DEFAULT_START_MINUTES, 0, 0);

  return formatTime(startTime);
}

export const getEndTime = (timestamp, hoursPerDay, breakTime) => {
  const endTime = new Date();
  endTime.setHours(DEFAULT_START_HOURS, DEFAULT_START_MINUTES + (timestamp * hoursPerDay) + breakTime, 0, 0);

  return formatTime(endTime);
}

// export const handleDayOfWeekClick = (day) => {
//   const dayIndex = daysIndex[day.toLowerCase()];
//   const newDate = addDays(CURRENT_DATE, dayIndex);
//   console.log(newDate);
//   return newDate
// };
