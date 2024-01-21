import { Dialog } from "@mui/material";

const DialogWrapper = ({ open, onClose, children }) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: {
          minWidth: "80vw",
          background: 'rgba(255, 255, 255)',
          border: "2px solid rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {children}
    </Dialog>
  )
}

export default DialogWrapper;