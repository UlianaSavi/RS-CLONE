import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface SendImageContextProps {
    popap: boolean;
    url: string;
    file: File | null;
    setPopap: React.Dispatch<React.SetStateAction<boolean>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
    setFile:React.Dispatch<React.SetStateAction<File | null>>
}

export const SendImageContext = createContext<SendImageContextProps>({
  popap: false,
  url: '',
  file: null,
  setPopap: () => null,
  setUrl: () => null,
  setFile: () => null,
});

export function SendImageContextProvider({ children }: ProviderProps) {
  const [popap, setPopap] = useState(false);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const value = useMemo(() => ({
    popap,
    setPopap,
    url,
    setUrl,
    file,
    setFile,
  }), [popap,
    setPopap,
    url,
    setUrl,
    file,
    setFile]);

  return (
    <SendImageContext.Provider value={value}>
      {children}
    </SendImageContext.Provider>
  );
}
