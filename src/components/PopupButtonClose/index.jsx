import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import styles from "./styles.module.scss"

const PopupButtonClose = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <CloseSharpIcon fontSize='medium' className={styles.btn__close} />
    </button>
  )
}

export default PopupButtonClose;