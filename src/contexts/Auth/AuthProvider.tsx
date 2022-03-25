import { ReactNode, useState, useEffect } from "react";

import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

import { useApi } from "../../hooks/useApi";
import api from "../../hooks/useApi";

type AuthProviderType = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<User | null>({ id: 3, name: "José", email: "jose@gmail.com" });

  const apiAuth = useApi();

  const signin = async (email: string, password: string) => {
    const data = await apiAuth.signin(email, password);
    if (data.user && data.token) {
      console.log(data.user, data.token);

      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await apiAuth.signout();
    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
    // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api.defaults.headers.common["Content-Type"] = "application/json";
  };

  const validateToken = async () => {
    const storageData = localStorage.getItem("authToken");
    // api.defaults.headers.common['Authorization'] = `Bearer ${storageData}`;
    api.defaults.headers.common["Content-Type"] = "application/json";

    if (storageData) {
      const data = await apiAuth.valedateToken(storageData);

      if (data.user) {
        setUser(data.user);
      }
    }
  };
  

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signin, signout, validateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
