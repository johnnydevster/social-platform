import { createContext, useContext } from "react";
import firebase from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// custom React hook to access the context
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  // Store the user in state
  const [user, setUser] = useState(null);

  function signInWithGoogle() {
    return firebase.auth;
  }
}

// Firebase code below
