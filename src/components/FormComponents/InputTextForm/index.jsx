import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const InputTextForm = ({ name }) => {
  const { control, setValue } = useFormContext();
  const handleChange = (value) => {
    setValue(name, value);
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field } }) => (
        <TextField
          {...field}
          onChange={(e) => handleChange(e.target.value)}
          value={value}
          placeholder='Название школы'

        />
      )
      }
    />

  )
}

export default InputTextForm;