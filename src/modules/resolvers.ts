import { createUser, getUser, getUsers } from "./users/user";

const resolvers = {
  Query: {
    user: (_: any, { id }: { id: number }) => getUser(id),
    users: () => getUsers(),
  },
  Mutation: {
    createUser: (_: any, { name, email, mobile }: { name: string; email: string; mobile: string }) =>
      createUser({ name, email, mobile }),
  },
};

export default resolvers;
