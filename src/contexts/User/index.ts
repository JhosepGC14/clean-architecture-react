import { createContext } from "react";
import { User } from "../../models/users.models";

export const SelectedUserContext = createContext({
  selectedUser: {} as User,
  setSelectedUser: (user: User) => {},
});
