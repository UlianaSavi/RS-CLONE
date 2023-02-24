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
  const [isDark, setIsDark] = useState(false);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark, setIsDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
