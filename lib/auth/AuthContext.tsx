import React, { useState, useEffect, useContext, createContext } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import axios from "axios";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

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
  onGoogleButtonPress: () => void;
  onFacebookButtonPress: () => void;
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
            // setUser(auth().currentUser);
            addUser(password);
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
  const addUser = (password: string) => {
    console.log(auth().currentUser);
    const reqUser = auth().currentUser;
    auth().currentUser?.getIdToken().then((val)=>{
    axios
    // https://shielded-caverns-63372.herokuapp.com/api/user
      .post("https://shielded-caverns-63372.herokuapp.com/api/user", {
        email:reqUser?.email,
        mno:reqUser?.phoneNumber,
        profile:reqUser?.photoURL,
        displayName:reqUser?.displayName,
        uid:reqUser?.uid,
        accessToken:val,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
    });
  };
  const updateProfilePic = (photourl: string) => {
    auth()
      .currentUser?.updateProfile({
        photoURL: photourl,
      })
      .then(() => {
        setUser(auth().currentUser);
      });
  };

  const onGoogleButtonPress = async () => {
    GoogleSignin.configure({
      webClientId:
        "669318155909-v812djkanngo0k6hgph2ecofe2u22t6p.apps.googleusercontent.com",
    });
    try {
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const authuser = auth().signInWithCredential(googleCredential);
      authuser.then((value) => {
        console.log(value);
        setUser(value.user);
        addUser('oAuthType')
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const onFacebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    const authuser = auth().signInWithCredential(facebookCredential);
    authuser.then((value) => {
      console.log(value);
      setUser(value.user);
      addUser('oAuthType')
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
    onFacebookButtonPress,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
