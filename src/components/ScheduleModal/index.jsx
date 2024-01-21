import { FormProvider, useForm } from "react-hook-form";
import DialogWrapper from "../DialogWrapper";
import PopupButtonClose from "../PopupButtonClose";
import styles from "./styles.module.scss";
import InputTextForm from "../FormComponents/InputTextForm";
import SelectForm from "../FormComponents/SelectForm";
import { timestamp, breakTime, teachersList, classroomsList } from "../../data";
import NumberInputForm from "../FormComponents/NumberInputForm";
import DateDuration from "../FormComponents/DateDuration";
import { getEndTime, getStartTime, getStartDate, getEndDate } from "../../helpers";
import DaysSelector from "../FormComponents/DaysSelector";
import AddBtn from "../AddBtn";

const ScheduleModal = ({ open, setOpen }) => {
  const formMethods = useForm({
    defaultValues: {
      schoolName: "",
      timestamp: 45,
      totalHours: 3,
      startDate: getStartDate(),
      endDate: getEndDate(3, 1),
      breakTime: 0,
      hoursPerDay: 1,
      startTime: getStartTime(),
      endTime: getEndTime(45, 1, 0),
      teacher: "",
      classroom: "",
      selectedDays: ["пн", "ср", "пт"]
    }
  })
  const { getValues, setValue } = formMethods;

  const handleClose = () => {
    setOpen(false);
  }
  const handleClick = () => {
    setOpen(false);
    console.log(getValues());
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
    const totalHours = getValues("totalHours");
    setValue(name, value);
    setValue("endTime", getEndTime(timestamp, value, breakTime));
    setValue("endDate", getEndDate(totalHours, value))
  }

  const selectBreakTime = (name, value) => {
    const hoursPerDay = getValues("hoursPerDay");
    const timestamp = getValues("timestamp");
    setValue(name, value);
    setValue("endTime", getEndTime(timestamp, hoursPerDay, value))
  }

  const changeTotalHours = (name, value) => {
    const hoursPerDay = getValues("hoursPerDay");
    setValue(name, value);
    setValue("endDate", getEndDate(value, hoursPerDay))
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
            <NumberInputForm name="totalHours" content="Всего часов" onChange={changeTotalHours} />
            <DateDuration name1="startDate" name2="endDate" />
          </div>
          <div className={styles.dialog__form_timetable}>
            <SelectForm name="breakTime" options={breakTime} onSelect={selectBreakTime} />
            <NumberInputForm name="hoursPerDay" content="Часов в день" onChange={changeHoursPerDay} />
            <DateDuration name1="startTime" name2="endTime" />
          </div>
          <div className={styles.dialog__form_timetable}>
            <DaysSelector />
          </div>
          <div className={styles.dialog__form_additional}>
            <SelectForm name="teacher" options={teachersList} placeholder="Выберите преподавателя на это время" />
            <SelectForm name="classroom" options={classroomsList} placeholder="Аудитория" />
          </div>
        </FormProvider>
      </div>
      <div className={styles.dialog__controls}>
        <AddBtn onClick={handleClick}> Добавить расписание </AddBtn>
      </div>
    </DialogWrapper>
  )
}

export default ScheduleModal;