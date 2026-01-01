import type { AxiosInstance } from "axios";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const http = new Http().instance;

export default http;
