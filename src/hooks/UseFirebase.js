import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  //   observing whether user auth state is changed or not
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        }
      },
      []
    );
  });

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default UseFirebase;
