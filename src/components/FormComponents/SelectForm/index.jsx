import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss"

const SelectForm = ({ name, options, onSelect, placeholder }) => {
  const { control, setValue } = useFormContext();
  const handleChange = (value) => {
    if (onSelect) {
      onSelect(name, value);
    } else {
      setValue(name, value);
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <FormControl className={styles.select}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            onChange={(e) => handleChange(e.target.value)}
            value={value}
            autoWidth
            displayEmpty
            renderValue={value !== "" ? undefined : () => placeholder}
          >

            {options.map(option => (
              <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl >
      )}
    />

  )
}

export default SelectForm;