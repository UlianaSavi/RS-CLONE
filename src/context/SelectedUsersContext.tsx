import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface SelectedUsersContexttProps {
  selectedUsers: string[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SelectedUsersContext = createContext<SelectedUsersContexttProps>({
  selectedUsers: [],
  setSelectedUsers: () => null,
});

export function SelectedUsersContextProvider({ children }: ProviderProps) {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const value = useMemo(() => (
    { selectedUsers, setSelectedUsers }), [selectedUsers, setSelectedUsers]);

  return (
    <SelectedUsersContext.Provider value={value}>
      {children}
    </SelectedUsersContext.Provider>
  );
}
