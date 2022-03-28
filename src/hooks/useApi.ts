import axios from "axios";

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
});

export default api;
