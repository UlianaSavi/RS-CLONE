import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface UserSidebarContextProps {
  userSidebar: boolean;
  setUserSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserSidebarContext = createContext<UserSidebarContextProps>({
  userSidebar: true,
  setUserSidebar: () => true,
});

export function UserSidebarProvider({ children }: ProviderProps) {
  const [userSidebar, setUserSidebar] = useState(false);

  const value = useMemo(() => (
    { userSidebar, setUserSidebar }), [userSidebar, setUserSidebar]);

  return (
    <UserSidebarContext.Provider value={value}>
      {children}
    </UserSidebarContext.Provider>
  );
}
