import axios from "axios";

export const exchangeInstance = axios.create({
  baseURL:
    "https://wise.com/rates/history+live?source=CNY&target=VND&length=10&resolution=hourly&unit=day",
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
