import styles from "./styles.module.scss";

const DayPicker = ({ name }) => {
  return (
    <button className={styles.date}>
      {name}
    </button>
  )
}

export default DayPicker;