import axios from "axios";
import { Subscribe } from "../interfaces/SubscribeInterface";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  valedateToken: async () => {
 
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("user/signin", { Email: email, password: password });

    return response.data;
  },
  register: async (item: Subscribe) => {
    const response = await api.post("user/create", item);

    return response.data;
  },
});

export default api;
