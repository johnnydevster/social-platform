import { createContext, useContext, Context } from "react";
import { useFirebaseAuth } from "./useFirebaseAuth";

export const authUserContext = createContext({
  user: null,
  loading: true,
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export function useAuth() {
  return useContext(authUserContext);
}
