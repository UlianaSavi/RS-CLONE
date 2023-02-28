import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface clickedEmojiContextProps {
  isClickedEmoji: string;
  setClickedEmoji: React.Dispatch<React.SetStateAction<string>>;
}

export const clickedEmoji = createContext<clickedEmojiContextProps>({
  isClickedEmoji: '',
  setClickedEmoji: () => '',
});

export function ClickedEmojiProvider({ children }: ProviderProps) {
  const [isClickedEmoji, setClickedEmoji] = useState('');

  const value = useMemo(() => (
    { isClickedEmoji, setClickedEmoji }), [isClickedEmoji, setClickedEmoji]);

  return (
    <clickedEmoji.Provider value={value}>
      {children}
    </clickedEmoji.Provider>
  );
}
