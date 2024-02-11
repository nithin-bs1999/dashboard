import * as types from "./mutation-types";
import UserService from "@/services/UserService";

const userService = new UserService();

export const getAllUsers = ({ commit }) =>
  new Promise((resolve, reject) => {
    userService
      .fetchAllUsers()
      .then((response) => {
        commit(types.ALL_USERS_DATA, response.data);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
