import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface ActiveChatContextProps {
  activeChat: string;
  setActiveChat: React.Dispatch<React.SetStateAction<string>>;
}

export const ActiveChatContext = createContext<ActiveChatContextProps>({
  activeChat: '',
  setActiveChat: () => '',
});

export function ActiveChatContextProvider({ children }: ProviderProps) {
  const [activeChat, setActiveChat] = useState('');

  const value = useMemo(() => ({ activeChat, setActiveChat }), [activeChat, setActiveChat]);

  return (
    <ActiveChatContext.Provider value={value}>
      {children}
    </ActiveChatContext.Provider>
  );
}
