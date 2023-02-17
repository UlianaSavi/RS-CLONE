import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface ActiveSidebarContextProps {
  isActiveSidebar: boolean;
  setActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActiveVisibilitySidebar = createContext<ActiveSidebarContextProps>({
  isActiveSidebar: true,
  setActiveSidebar: () => true,
});

export function ActiveVisibilitySidebarProvider({ children }: ProviderProps) {
  const [isActiveSidebar, setActiveSidebar] = useState(true);

  const value = useMemo(() => (
    { isActiveSidebar, setActiveSidebar }), [isActiveSidebar, setActiveSidebar]);

  return (
    <ActiveVisibilitySidebar.Provider value={value}>
      {children}
    </ActiveVisibilitySidebar.Provider>
  );
}
