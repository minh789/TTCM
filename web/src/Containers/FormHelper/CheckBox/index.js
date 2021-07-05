import { FormControl,FormControlLabel,Checkbox,FormHelperText } from '@material-ui/core';

const CheckboxWithLabelAndError = ({
    input,
    label,
    classes,
    meta: {touched, error},
    children,
    ...custom
  }) => (
<FormControl error={Boolean(touched && error)} fullWidth>
<FormControlLabel
label={label}
control={
<Checkbox
{...input}
onChange={event => input.onChange(event.target.checked)}
value={input.value}
checked={input.value}
{...custom}>
{children}
</Checkbox>
}
/>
{touched && error && <FormHelperText className={classes.checkboxError}>{error}</FormHelperText>}
</FormControl>
);

export  default CheckboxWithLabelAndError;