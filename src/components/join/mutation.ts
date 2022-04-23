import { useGQLMutation } from '@services/graphql';
import { IJoinForm } from './join.interface';

const CREATE_USER = `
  mutation createCustomer($params: CustomerInput!) { 
    createCustomer(params: $params) {
      _id
      firstName
    } 
  }
`;

const useCreateCustomer = () =>
  useGQLMutation<any, unknown, Omit<IJoinForm, 'confirmPassword'>>(
    CREATE_USER,
    {
      onSuccess: (data) => {
        console.log('User successfully created', data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

export { useCreateCustomer };
