import { FormProvider, useForm } from "react-hook-form";
import DialogWrapper from "../DialogWrapper";
import PopupButtonClose from "../PopupButtonClose";
import styles from "./styles.module.scss";
import InputTextForm from "../FormComponents/InputTextForm";


const ScheduleModal = ({ open, setOpen }) => {
  const formMethods = useForm({
    defaultValues: {
      schoolName: "",
    }
  })
  const { getValues } = formMethods;

  const handleClose = () => {
    setOpen(false)
    console.log(getValues())
  }

  return (
    <DialogWrapper open={open} onClose={handleClose}>
      <div className={styles.dialog__header}>
        <h2>Редактирование расписания</h2>
        <PopupButtonClose onClick={handleClose} />
      </div>
      <div className={styles.dialog__form}>
        <FormProvider {...formMethods}>
          <InputTextForm name="schoolName" />
        </FormProvider>
      </div>

    </DialogWrapper>
  )
}

export default ScheduleModal;