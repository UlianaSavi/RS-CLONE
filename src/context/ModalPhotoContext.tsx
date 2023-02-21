import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface ModalPhotoContextProps {
    imagePopap: boolean;
    url: string;
    setImagePopap: React.Dispatch<React.SetStateAction<boolean>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const ModalPhotoContext = createContext<ModalPhotoContextProps>({
  imagePopap: false,
  url: '',
  setImagePopap: () => null,
  setUrl: () => null,
});

export function ModalPhotoContextProvider({ children }: ProviderProps) {
  const [imagePopap, setImagePopap] = useState(false);
  const [url, setUrl] = useState('');
  const value = useMemo(() => ({
    imagePopap,
    setImagePopap,
    url,
    setUrl,
  }), [imagePopap,
    setImagePopap,
    url,
    setUrl]);

  return (
    <ModalPhotoContext.Provider value={value}>
      {children}
    </ModalPhotoContext.Provider>
  );
}
