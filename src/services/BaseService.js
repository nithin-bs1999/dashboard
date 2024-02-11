const axios = require("axios");

export default class BaseService {
  constructor() {
    this.baseURL = "http://localhost:3000";
    this.http = axios;

    //interceptor

    //refreshToken

    //userToken

    // getUserToken = () => {
    //     const token = cookies.get('userTokenCookie');
    //     return token.access_token;
    //   };
  }
}
