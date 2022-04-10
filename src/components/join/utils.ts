export enum JOIN_FIELDS {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  PHONE_NUMBER = 'phoneNumber',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export enum JOIN_VALIDATION_ERRORS {
  FIRST_NAME = 'First name is required!',
  LAST_NAME = 'Last name is required!',
  PHONE_NUMBER = 'Phone number is required!',
  PASSWORD = 'Password is required!',
  CONFIRM_PASSWORD = 'Confirm password is required!',
  PASSWORD_DONT_MATCH = "Password and Confirm password doesn't match!",
  INVALID_PHONE_NUMBER = 'Please enter valid phone number!',
}
