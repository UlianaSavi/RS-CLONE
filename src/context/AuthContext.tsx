import {
  createContext, useState, useEffect, useMemo,
} from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, User as FBUser } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { User } from '../types';

interface AuthContextProps {
  currentUser: FBUser | null;
  userFull: User | null;
  setUserFull: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  userFull: null,
  setUserFull: () => null,
});

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<FBUser | null>(null);
  const [userFull, setUserFull] = useState<User | null>(null);
  const value = useMemo(() => ({ currentUser, userFull, setUserFull }), [currentUser, userFull]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    ((async () => {
      if (currentUser) {
        const user = await getDoc(doc(db, 'users', currentUser?.uid));
        setUserFull(user.data() as User);
      }
    })());
  }, [currentUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
