import { FC } from 'react';
import { FormHelperText, TextField, TextFieldProps } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';

import { errorStyles } from './styles';

type Props = TextFieldProps & {
  errorMessage?: string;
  name: string;
  rules?: any;
};

const renderErrorMessage = (error?: string) => {
  if (!error) {
    return null;
  }

  return <FormHelperText className={errorStyles}>{error}</FormHelperText>;
};

const FormInput: FC<Props> = (props) => {
  const { name, rules, defaultValue = '', onChange, ...inputProps } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  const error = Boolean(errors[name]?.message);

  return (
    <>
      <TextField
        fullWidth
        {...inputProps}
        {...field}
        onChange={(e) => {
          if (onChange) onChange(e);
          field.onChange(e);
        }}
        error={error}
      />
      {renderErrorMessage(errors[name]?.message)}
    </>
  );
};

export default FormInput;
