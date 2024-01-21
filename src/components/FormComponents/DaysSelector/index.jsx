import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";
import DayPicker from "../../DayPicker";

const DaysSelector = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const { control, setValue } = useFormContext();

  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const groupedDays = [['пн', 'ср', 'пт'], ['вт', 'чт']];

  return (
    <Controller
      control={control}
      name="selectedDays"
      defaultValue={[]}
      render={({ field }) => (
        <div className={styles.wrapper}>
          {
            groupedDays.map((group, i) => (
              <DayPicker key={i} label={group} name={group.join("/")} />
            ))
          }
          {
            days.map((day, i) => (
              <DayPicker key={i} label={day} name={day} />
            ))
          }
        </div>
      )}
    />
  );
}

export default DaysSelector;