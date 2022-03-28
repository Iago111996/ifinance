import { ReactNode, useLayoutEffect } from "react";

import { AuthContext } from "./AuthContext";

import api from "../../hooks/useApi";
import { useApi } from "../../hooks/useApi";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type AuthProviderType = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useLocalStorage("userName", null);
  const [name, setName] = useLocalStorage("userName", null);
  const [email, setEmail] = useLocalStorage("userEmail", null);
  const [token, setToken] = useLocalStorage("authToken", null);
  const [date, setDate] = useLocalStorage("expirationDate", null);

  const apiAuth = useApi();

  const signin = async (email: string, password: string) => {
    const data = await apiAuth.signin(email, password);
    if (data.user) {
      setUser(data.user);
      setValuesLocal(
        data.info.value.token,
        data.info.value.expiration,
        data.user.name,
        data.user.email
      );

      return true;
    }

    return false;
  };

  const signout = async () => {
    setUser(null);
    setValuesLocal("", "", "", "");
  };

  const setValuesLocal = (
    token: string,
    expiration: string,
    userName: string,
    userEmail: string
  ) => {
    setName(userName);
    setEmail(userEmail);
    setToken(token);
    setDate(expiration);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.defaults.headers.common["Content-Type"] = "application/json";
  };

  const validateToken = async () => {
    // const storageData = localStorage.getItem("authToken");
    // api.defaults.headers.common['Authorization'] = `Bearer ${storageData}`;
    // api.defaults.headers.common["Content-Type"] = "application/json";
    // if (storageData) {
    //   const data = await apiAuth.valedateToken();
    //   if (data.user) {
    //     setUser(data.user);
    //   }
    // }
  };

  useLayoutEffect(() => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signin, signout, validateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
