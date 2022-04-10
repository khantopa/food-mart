import { Button, Card, FormControl } from '@mui/material';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FormProvider,
} from 'react-hook-form';

import FormInput from '@atoms/FormInput';
import { joinFormStyles, joinFormTitleStyles } from './style';
import { JOIN_FIELDS, JOIN_VALIDATION_ERRORS } from './utils';

interface FieldValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const JoinForm = () => {
  const formMethods = useForm<FieldValues>({
    mode: 'all',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  const {
    handleSubmit,
    getValues,
    formState: { isDirty, isValid, isSubmitting },
  } = formMethods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const onErrors: SubmitErrorHandler<FieldValues> = (errors) => {
    console.warn(errors);
  };

  const formatPhoneNumber = (e: any) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]*/g, '');
    e.target.value = value;
  };

  const validatePasswordMatch = (value: string) => {
    const password = getValues('password');
    if (value !== password) {
      return JOIN_VALIDATION_ERRORS.PASSWORD_DONT_MATCH;
    }
  };

  return (
    <Card className={joinFormStyles}>
      <h3 className={joinFormTitleStyles}>Create an account</h3>
      <FormProvider {...formMethods}>
        <FormControl fullWidth margin="dense">
          <FormInput
            name={JOIN_FIELDS.FIRST_NAME}
            label="First Name"
            rules={{ required: JOIN_VALIDATION_ERRORS.FIRST_NAME }}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormInput
            name={JOIN_FIELDS.LAST_NAME}
            label="Last Name"
            rules={{ required: JOIN_VALIDATION_ERRORS.LAST_NAME }}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormInput
            name={JOIN_FIELDS.PHONE_NUMBER}
            label="Phone Number"
            onChange={formatPhoneNumber}
            rules={{
              required: JOIN_VALIDATION_ERRORS.PHONE_NUMBER,
              minLength: {
                value: 10,
                message: JOIN_VALIDATION_ERRORS.INVALID_PHONE_NUMBER,
              },
              maxLength: {
                value: 10,
                message: JOIN_VALIDATION_ERRORS.INVALID_PHONE_NUMBER,
              },
              pattern: (value: string) =>
                value.match(/[0-9]*/i)
                  ? undefined
                  : JOIN_VALIDATION_ERRORS.INVALID_PHONE_NUMBER,
            }}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormInput
            name={JOIN_FIELDS.PASSWORD}
            label="Password"
            type="password"
            rules={{ required: JOIN_VALIDATION_ERRORS.PASSWORD }}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormInput
            name={JOIN_FIELDS.CONFIRM_PASSWORD}
            label="Confirm Password"
            type="password"
            rules={{
              required: JOIN_VALIDATION_ERRORS.CONFIRM_PASSWORD,
              validate: {
                validatePasswordMatch,
              },
            }}
          />
        </FormControl>
      </FormProvider>

      <FormControl fullWidth margin="normal">
        <Button
          onClick={handleSubmit(onSubmit, onErrors)}
          color="primary"
          variant="contained"
          type="submit"
          disabled={!isDirty || isSubmitting || !isValid}
        >
          Create
        </Button>
      </FormControl>
    </Card>
  );
};

export default JoinForm;
