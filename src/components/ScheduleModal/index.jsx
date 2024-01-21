import { FormProvider, useForm } from "react-hook-form";
import DialogWrapper from "../DialogWrapper";
import PopupButtonClose from "../PopupButtonClose";
import styles from "./styles.module.scss";
import InputTextForm from "../FormComponents/InputTextForm";
import SelectForm from "../FormComponents/SelectForm";
import { timestamp } from "../../data";
import NumberInputForm from "../FormComponents/NumberInputForm";


const ScheduleModal = ({ open, setOpen }) => {
  const formMethods = useForm({
    defaultValues: {
      schoolName: "",
      timestamp: "Академические",
      totalHours: 1,
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
          <div>
            <InputTextForm name="schoolName" />
          </div>
          <div className={styles.dialog__form_dates}>
            <SelectForm name="timestamp" options={timestamp} />
            <NumberInputForm name="totalHours" content="Всего часов" />
          </div>
        </FormProvider>
      </div>
    </DialogWrapper>
  )
}

export default ScheduleModal;