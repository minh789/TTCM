import React from "react";
import Input from '@material-ui/core/Input';

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

  export default renderTextField;