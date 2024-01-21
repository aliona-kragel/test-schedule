
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss"

const NumberInputForm = ({ name, content }) => {
  const { control, setValue } = useFormContext();
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setValue(name, count - 1);
    }
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    setValue(name, count + 1);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <div className={styles.wrapper}>
          <button onClick={decreaseCount} className={styles.btn}>-</button>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(name, e.target.value)}
          />
          <span>{content}</span>
          <button onClick={increaseCount} className={styles.btn}>+</button>
        </div>
      )}
    />
  );
};

export default NumberInputForm;