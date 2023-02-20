import { createContext, useState, useMemo } from 'react';
import { IFileInfo } from '../types';

interface ProviderProps {
  children: React.ReactNode;
}

interface SendImageContextProps {
    popap: boolean;
    url: string;
    file: File | null;
    fileInfo: IFileInfo;
    setPopap: React.Dispatch<React.SetStateAction<boolean>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
    setFile: React.Dispatch<React.SetStateAction<File | null>>
    setFileInfo: React.Dispatch<React.SetStateAction<IFileInfo>>
}

export const SendImageContext = createContext<SendImageContextProps>({
  popap: false,
  url: '',
  file: null,
  fileInfo: {
    fileType: '',
    fileSize: '',
    fileName: '',
  },
  setPopap: () => null,
  setUrl: () => null,
  setFile: () => null,
  setFileInfo: () => null,
});

export function SendImageContextProvider({ children }: ProviderProps) {
  const [popap, setPopap] = useState(false);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileInfo, setFileInfo] = useState({
    fileType: '',
    fileSize: '',
    fileName: '',
  });
  const value = useMemo(() => ({
    popap,
    setPopap,
    url,
    setUrl,
    file,
    setFile,
    fileInfo,
    setFileInfo,
  }), [popap,
    setPopap,
    url,
    setUrl,
    file,
    setFile,
    fileInfo,
    setFileInfo,
  ]);

  console.log(file);

  return (
    <SendImageContext.Provider value={value}>
      {children}
    </SendImageContext.Provider>
  );
}
