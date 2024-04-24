import { AuthKey } from "./AuthKey/AuthKey";
import { removeLocalstorage } from "./SetDataLocalstorage";

export const logoutUser = () => {
  return removeLocalstorage(AuthKey);
};
