import {
  createContext, useState, useMemo, Dispatch, SetStateAction,
} from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface ProviderProps {
  children: React.ReactNode;
}

interface IContext {
  type: string;
  setType: TypeSetState<string>;
}

export const ThemeContext = createContext<IContext>({
  type: 'Dark',
  setType: () => 'Dark',
});

export function ThemeProvider({ children }: ProviderProps) {
  const [type, setType] = useState('Dark');

  const value = useMemo(() => ({ type, setType }), [type, setType]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
