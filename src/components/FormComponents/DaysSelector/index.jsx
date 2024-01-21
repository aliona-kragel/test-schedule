import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";
import DayPicker from "../../DayPicker";

const DaysSelector = () => {
  const { control, setValue, getValues } = useFormContext();

  const days = ['пн/ср/пт', 'вт/чт', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const handleDayClick = (label) => {
    if (label === 'пн/ср/пт') {
      setValue('selectedDays', ['пн', 'ср', 'пт'])
      return;
    }
    if (label === 'вт/чт') {
      setValue('selectedDays', ['вт', 'чт']);
      return;
    }

    const selectedDays = getValues("selectedDays");

    if (selectedDays.includes(label)) {
      const newArray = selectedDays.filter(el => label !== el);
      setValue('selectedDays', newArray)
    } else {
      const newArray = selectedDays.concat([label])
      setValue('selectedDays', newArray)
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