import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-2e72a.firebaseio.com/"
});

export default instance;
