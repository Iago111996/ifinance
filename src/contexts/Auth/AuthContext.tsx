import { createContext } from "react";
import { User } from "../../types/User";

export interface AuthContextType {
    signed: boolean;
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
    validateToken: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);