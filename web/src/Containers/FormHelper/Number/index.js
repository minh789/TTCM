import React from "react";
import TextField from '@material-ui/core/TextField';

const renderNumber = ({
    label,
    input,
    type,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      type={type}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

  export default renderNumber;