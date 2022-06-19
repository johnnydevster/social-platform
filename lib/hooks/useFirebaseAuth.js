import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-client/firebase-client-config";
import { getUserInformation } from "../firebase-client/firebase-client-firestore";

export function useFirebaseAuth() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoading(true);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const userInfo = await getUserInformation(uid);

        setUser({
          email: user.email,
          accountCreated: user.metadata.creationTime,
          photoUrl: user.photoUrl,
          ...userInfo,
        });
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return unsub;
  }, []);

  return { user, loading };
}
