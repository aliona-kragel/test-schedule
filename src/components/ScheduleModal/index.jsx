import { FormProvider, useForm } from "react-hook-form";
import DialogWrapper from "../DialogWrapper";
import PopupButtonClose from "../PopupButtonClose";
import styles from "./styles.module.scss";
import InputTextForm from "../FormComponents/InputTextForm";
import SelectForm from "../FormComponents/SelectForm";
import { timestamp, breakTime } from "../../data";
import NumberInputForm from "../FormComponents/NumberInputForm";
import DateDuration from "../FormComponents/DateDuration";
import { dataPrettier, getEndTime, getStartTime } from "../../helpers";


const ScheduleModal = ({ open, setOpen }) => {
  const formMethods = useForm({
    defaultValues: {
      schoolName: "",
      timestamp: 45,
      totalHours: 1,
      startDate: dataPrettier(new Date()),
      endDate: dataPrettier(new Date()),
      breakTime: 0,
      hoursPerDay: 1,
      startTime: getStartTime(),
      endTime: getEndTime(45, 1, 0),
    }
  })
  const { getValues, setValue } = formMethods;

  const handleClose = () => {
    setOpen(false)
    console.log(getValues())
  }

  const selectTimestamp = (name, value) => {
    const hoursPerDay = getValues("hoursPerDay");
    const breakTime = getValues("breakTime");
    setValue(name, value);
    setValue("endTime", getEndTime(value, hoursPerDay, breakTime))
  }

  const changeHoursPerDay = (name, value) => {
    const timestamp = getValues("timestamp");
    const breakTime = getValues("breakTime");
    setValue(name, value);
    setValue("endTime", getEndTime(timestamp, value, breakTime))
  }

  const selectBreakTime = (name, value) => {
    const hoursPerDay = getValues("hoursPerDay");
    const timestamp = getValues("timestamp");
    setValue(name, value);
    setValue("endTime", getEndTime(timestamp, hoursPerDay, value))
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
            <SelectForm name="timestamp" options={timestamp} onSelect={selectTimestamp} />
            <NumberInputForm name="totalHours" content="Всего часов" />
            <DateDuration name1="startDate" name2="endDate" />
          </div>
          <div className={styles.dialog__form_timetable}>
            <SelectForm name="breakTime" options={breakTime} onSelect={selectBreakTime} />
            <NumberInputForm name="hoursPerDay" content="Часов в день" onChange={changeHoursPerDay} />
            <DateDuration name1="startTime" name2="endTime" />
          </div>
        </FormProvider>
      </div>
    </DialogWrapper>
  )
}

export default ScheduleModal;