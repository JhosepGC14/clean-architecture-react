import { User } from "../../models/users.models";
import axios from "axios";

const apiUrl = "https://www.ateneacorp.com/";
const loginUrl = `${apiUrl}login`;

export const login = (email: string, password: string): Promise<User> => {
  return axios.post(loginUrl, { email, password });
};
