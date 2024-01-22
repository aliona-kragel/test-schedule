import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

const DateDuration = ({ name1, name2 }) => {
  const { control, setValue } = useFormContext();

  const handleChangeStart = (value) => {
    setValue(name1, value);
  }
  const handleChangeEnd = (value) => {
    setValue(name2, value);
  }

  return (
    <div className={styles.wrapper}>
      <Controller
        name={name1}
        control={control}
        render={({ field: { value } }) => (
          <input
            value={value}
            onChange={(e) => handleChangeStart(e.target.value)}
            readOnly />
        )}
      />
      <span>до</span>
      <Controller
        name={name2}
        control={control}
        render={({ field: { value } }) => (
          <input
            value={value}
            onChange={(e) => handleChangeEnd(e.target.value)}
            readOnly
          />
        )}
      />
    </div>
  )
}

export default DateDuration