import DialogWrapper from "../DialogWrapper";
import PopupButtonClose from "../PopupButtonClose";
import styles from "./styles.module.scss";


const ScheduleModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <DialogWrapper open={open} onClose={handleClose}>
      <div className={styles.dialog__header}>
        <h2>Редактирование расписания</h2>
        <PopupButtonClose onClick={handleClose} />
      </div>

    </DialogWrapper>
  )
}

export default ScheduleModal;