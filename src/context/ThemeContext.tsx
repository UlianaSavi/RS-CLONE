import {
  createContext, useState, useMemo, Dispatch, SetStateAction,
} from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface ProviderProps {
  children: React.ReactNode;
}

interface IContext {
  isDark: boolean;
  setIsDark: TypeSetState<boolean>;
}

export const ThemeContext = createContext<IContext>({
  isDark: true,
  setIsDark: () => true,
});

export function ThemeProvider({ children }: ProviderProps) {
  let initialState;

  const localStorageValue = localStorage.getItem('theme');
  if (localStorageValue) {
    initialState = JSON.parse(localStorageValue);
  } else {
    initialState = true;
  }

  const [isDark, setIsDark] = useState(initialState);
  localStorage.setItem('theme', JSON.stringify(isDark));

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark, setIsDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
