/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useMemo } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ActiveChatContext = createContext<{
  activeChat: string;
  setActiveChat: React.Dispatch<React.SetStateAction<string>>;
}>({
  activeChat: '',
  setActiveChat: () => {},
});

export function ActiveChatContextProvider({ children }: Props) {
  const [activeChat, setActiveChat] = useState<string>('');

  const value = useMemo(() => ({ activeChat, setActiveChat }), [activeChat, setActiveChat]);

  return (
    <ActiveChatContext.Provider value={value}>
      {children}
    </ActiveChatContext.Provider>
  );
}
