/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  userID: string;
  setUserID: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextProps>({
  userID: '',
  setUserID: () => '',
});

export function UserContextProvider({ children }: ProviderProps) {
  const [userID, setUserID] = useState('');

  const value = useMemo(() => ({ userID, setUserID }), [userID, setUserID]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
