import React, { ReactNode, createContext, useContext, useState } from 'react';
import { MantineProvider, createTheme, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

const defaultTheme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'blue',
});

interface ThemeContextType {
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used inside AppProvider');
  return ctx;
};

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');

  const theme = createTheme({
    ...defaultTheme,
  });

  const toggleColorScheme = () =>
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
