import styles from "./styles.module.scss";

const DayPicker = ({ label, fieldValue, onClick }) => {
  const isSelected = () => {
    if (label === 'пн/ср/пт') {
      return fieldValue.includes('пн') && fieldValue.includes('ср') && fieldValue.includes('пт')
    }
    if (label === 'вт/чт') {
      return fieldValue.includes('вт') && fieldValue.includes('чт')
    }
    if (fieldValue.includes(label)) {
      return fieldValue.includes(label)
    }
  }
  return (
    <button className={`${styles.date} ${isSelected() && styles.selected}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default DayPicker;