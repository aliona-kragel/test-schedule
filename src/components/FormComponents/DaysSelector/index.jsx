import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";
import DayPicker from "../../DayPicker";
import { getEndDate } from "../../../helpers";

const DaysSelector = () => {
  const { control, setValue, getValues } = useFormContext();

  const days = ['пн/ср/пт', 'вт/чт', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const handleDayClick = (label) => {
    const totalHours = getValues('totalHours');
    const hoursPerDay = getValues('hoursPerDay');
    const selectedDays = getValues("selectedDays");

    if (label === 'пн/ср/пт') {
      if (JSON.stringify(selectedDays) === JSON.stringify(['пн', 'ср', 'пт'])) {
        setValue('selectedDays', []);
        setValue('endDate', getEndDate(totalHours, hoursPerDay, []));
      } else {
        setValue('selectedDays', ['пн', 'ср', 'пт']);
        setValue('endDate', getEndDate(totalHours, hoursPerDay, ['пн', 'ср', 'пт']));
      }
      return;
    }

    if (label === 'вт/чт') {
      if (JSON.stringify(selectedDays) === JSON.stringify(['вт', 'чт'])) {
        setValue('selectedDays', []);
        setValue('endDate', getEndDate(totalHours, hoursPerDay, []));
      } else {
        setValue('selectedDays', ['вт', 'чт']);
        setValue('endDate', getEndDate(totalHours, hoursPerDay, ['вт', 'чт']));
      }

      return
    }

    if (selectedDays.includes(label)) {
      const newArray = selectedDays.filter(el => label !== el);
      setValue('selectedDays', newArray);
      setValue('endDate', getEndDate(totalHours, hoursPerDay, newArray));
    } else {
      const newArray = selectedDays.concat([label]);
      setValue('selectedDays', newArray);
      setValue('endDate', getEndDate(totalHours, hoursPerDay, newArray));
    }

  }

  return (
    <Controller
      control={control}
      name="selectedDays"
      defaultValue={[]}
      render={({ field: { value } }) => (
        <div className={styles.wrapper}>
          {
            days.map((day, i) => (
              <DayPicker key={i} label={day} onClick={() => handleDayClick(day)} fieldValue={value} />
            ))
          }
        </div>
      )}
    />
  );
}

export default DaysSelector;