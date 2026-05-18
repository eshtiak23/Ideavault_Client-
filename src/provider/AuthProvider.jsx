import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const authInfo = {
    user: null,
    loading: false,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}