import * as types from "./mutation-types";

const mutations = {
  [types.ALL_USERS_DATA](state, value) {
    state.allUsers = value;
  },
};

export default mutations;
