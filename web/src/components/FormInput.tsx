import { Box, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type FormInputProps = {
  name: string
  label: string
}

export function FormInput({ name, label }: FormInputProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box>
            <TextField
              label={label}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              {...field}
            />
          </Box>
        )
      }}
    />
  )
}
