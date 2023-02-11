import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface ActiveChatContextProps {
  activeChatID: string;
  setActiveChatID: React.Dispatch<React.SetStateAction<string>>;
}

export const ActiveChatContext = createContext<ActiveChatContextProps>({
  activeChatID: '',
  setActiveChatID: () => '',
});

export function ActiveChatContextProvider({ children }: ProviderProps) {
  const [activeChatID, setActiveChatID] = useState('');

  const value = useMemo(() => ({ activeChatID, setActiveChatID }), [activeChatID, setActiveChatID]);

  return (
    <ActiveChatContext.Provider value={value}>
      {children}
    </ActiveChatContext.Provider>
  );
}
