import React, { useState, useEffect, useContext, createContext } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import axios from "axios";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
interface Authcon {
  user: FirebaseAuthTypes.User;
  signin: (email: string, password: string) => void;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => void;
  signout: () => void;
  updateProfilePic: (photourl: string) => void;
  onGoogleButtonPress: () => Promise<FirebaseAuthTypes.UserCredential>;
}
const authContext = createContext<Authcon | null>(null);

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
function useProvideAuth() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const signin = (email: string, password: string) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response: any) => {
        setUser(response.user);
        console.log(response.user);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const signup = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        auth()
          .currentUser?.updateProfile({
            displayName: firstName + " " + lastName,
          })
          .then(() => {
            setUser(auth().currentUser);
            addUser(response, password);
            return response;
          })
          .catch((error: any) => {
            alert(error.message);
            return;
          });
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };
  const signout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(undefined);
      });
  };
  const addUser = (tokenData: any, password: string) => {
    console.log(tokenData);
    console.log(tokenData.user);
    axios
      .post("https://shielded-caverns-63372.herokuapp.com/api/user", {
        ...tokenData.user,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const updateProfilePic = (photourl: string) => {
    auth()
      .currentUser?.updateProfile({
        photoURL: photourl,
      })
      .then(() => {
        console.log(user);
      });
  };

  const onGoogleButtonPress= async () => {
    GoogleSignin.configure({
      webClientId: '669318155909-v812djkanngo0k6hgph2ecofe2u22t6p.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo)
    } catch (error) {
      console.log(error)
      alert(error)
    }
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
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    addUser,
    updateProfilePic,
    onGoogleButtonPress,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
