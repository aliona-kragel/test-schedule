import { useState } from "react";
import ShowModalBtn from "./components/ShowModalBtn";
import styles from "./styles/styles.module.scss";
import ScheduleModal from "./components/ScheduleModal";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  }

  return (
    <div className={styles.app}>
      <ShowModalBtn onClick={handleClick}>
        Show modal
      </ShowModalBtn>
      <ScheduleModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
