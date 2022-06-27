import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
interface Authcon{
  user: User | undefined;
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  signout: () => void;
}
const authContext = createContext<Authcon|null>(null);

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
function useProvideAuth() {
  const [user, setUser] = useState<User>();
  const signin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then((response: any) => {
      setUser(response.user);
      return response.user;
    });
  };
  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (response: any) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signout = () => {
    signOut(auth).then(() => {
      setUser(undefined);
    });
  };
  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
