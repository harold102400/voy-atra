import { createContext, useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Helper from 'utils/helper';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userSite, setUserSite] = useState();

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setUserSite(Helper.getSiteFromEmail(currentUser.email));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ signIn, user, userSite }}>{children}</AuthContext.Provider>;
};

const UserAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, UserAuth };
