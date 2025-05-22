import { UserAttributes } from "../../interfaces/user";

let users: UserAttributes[] = [];
let idCounter = 1;

const createUser = ({ name, email, mobile }: UserAttributes) => {
  const user: UserAttributes = { id: idCounter++, name, email, mobile };
  users.push(user);
  return user;
};

const getUser = (id: number) => users.find((u) => u.id == id);
const getUsers = () => users;

export { createUser, getUser, getUsers };
