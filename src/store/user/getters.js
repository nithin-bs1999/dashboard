const isObj = require("lodash.get");

export const allUsers = (state) => isObj(state, "allUsers", {});
