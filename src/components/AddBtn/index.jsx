import styles from "./styles.module.scss";

const AddBtn = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default AddBtn