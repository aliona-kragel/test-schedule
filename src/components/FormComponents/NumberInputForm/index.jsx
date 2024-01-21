
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss"

const NumberInputForm = ({ name, content, onChange }) => {
  const { control, setValue } = useFormContext();

  const handleChange = (value) => {
    if (onChange) {
      onChange(name, value);
    }
  }

  const changeCount = (value) => {
    if (onChange) {
      onChange(name, value);
    } else {
      setValue(name, value);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <div className={styles.wrapper}>
          <button onClick={() => changeCount((value <= 1) ? 1 : value - 1)} className={styles.btn}>-</button>
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
          <span>{content}</span>
          <button onClick={() => changeCount((value >= 24) ? 24 : value + 1)} className={styles.btn}>+</button>
        </div>
      )}
    />
  );
};

export default NumberInputForm;