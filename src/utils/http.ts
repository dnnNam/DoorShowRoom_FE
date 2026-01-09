import type { AxiosInstance } from "axios";
import axios from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
      paramsSerializer: {
        indexes: null,
      },
    });
  }
}

const http = new Http().instance;

export default http;
