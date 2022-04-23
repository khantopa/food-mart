import Customer from 'server/models/customer';

const customerQueries = {
  customer: async (_parent: any, { args }: any) =>
    new Promise(async (resolve, reject) => {
      try {
        const customer = await Customer.findById(args.id);
        resolve(customer);
      } catch (err) {
        reject(err);
      }
    }),
};

export default customerQueries;
