import { createContext, useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Helper from 'utils/helper';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
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

  return <UserContext.Provider value={{ signIn, user, userSite }}>{children}</UserContext.Provider>;
};

const UserAuth = () => {
  return useContext(UserContext);
};

export { UserContextProvider, UserAuth };
