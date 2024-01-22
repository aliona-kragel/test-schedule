import { daysIndex } from "../data";
import { addDays, addWeeks, format, isBefore, startOfWeek } from 'date-fns';

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

export const getEndDate = (totalHours, hoursPerDay, selectedDays) => {
  const currentDate = new Date();
  const convertedSelectedDays = selectedDays.map(day => daysIndex[day]);
  const amoumtOfWeek = Math.ceil(totalHours / hoursPerDay / selectedDays.length);
  let finalDays = [];
  for (let i = 0; i <= amoumtOfWeek; i++) {
    const startWeek = startOfWeek(addWeeks(currentDate, i));
    let daysOfWeek = convertedSelectedDays.map(dayIndex => addDays(startWeek, dayIndex - 1)).filter(date => !isBefore(date, currentDate));
    finalDays = finalDays.concat(daysOfWeek);
  }
  return format(finalDays[totalHours / hoursPerDay - 1], 'dd.MM.yyyy');
}
