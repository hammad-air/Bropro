import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('light');

  useEffect(() => {
    const stored = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setThemeState(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState, toggle: () => setThemeState(t => t === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
