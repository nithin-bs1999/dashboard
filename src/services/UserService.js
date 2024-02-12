import BaseService from "./BaseService";

export default class UserService extends BaseService {
  fetchAllUsers() {
    return new Promise((resolve, reject) => {
      const apiEndPoint = `${this.baseURL}/users`;
      this.http
        .get(apiEndPoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      const apiEndPoint = `${this.baseURL}/users`;
      this.http
        .post(apiEndPoint, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getSingleUser(id) {
    return new Promise((resolve, reject) => {
      const apiEndPoint = `${this.baseURL}/users/${id}`;
      this.http
        .get(apiEndPoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  editUser(data) {
    return new Promise((resolve, reject) => {
      const apiEndPoint = `${this.baseURL}/users/${data.id}`;
      this.http
        .put(apiEndPoint, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      const apiEndPoint = `${this.baseURL}/users/${id}`;
      this.http
        .delete(apiEndPoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
