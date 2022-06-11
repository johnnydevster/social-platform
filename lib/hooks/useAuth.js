import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-client/firebase-client-config";

export function useAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return { user };
}
