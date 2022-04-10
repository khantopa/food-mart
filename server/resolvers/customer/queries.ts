import Customer from 'server/models/customer';

const customerQueries = {
  customer: async (_parent: any, { args }: any) => {
    try {
      return await Customer.findOne({ _id: args.body });
    } catch (error) {
      console.log(error);
    }
  },
};

export default customerQueries;
