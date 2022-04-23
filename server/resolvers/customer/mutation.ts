import bcrypt from 'bcryptjs';
import Customer from '@models/customer';

const customerMutation = {
  createCustomer: async (_: any, args: any) => {
    try {
      const { params } = args;
      const password = await bcrypt.hash(params.password, 12);
      const customer = await Customer.create({ ...params, password });
      return Promise.resolve(customer);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default customerMutation;
