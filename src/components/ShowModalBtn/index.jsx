import styles from "./styles.module.scss";

const ShowModalBtn = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.show__btn}>
      {children}
    </button>
  )
}

export default ShowModalBtn;