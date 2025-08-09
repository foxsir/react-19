import {createContext, useContext, useState} from "react";
const ThemeContext = createContext<'dark' | 'light'>("dark");

const Button = () => {
  const theme = useContext(ThemeContext)
  return <button className={`${theme === "dark" ? '!bg-black/70 text-white' : 'bg-gray-200'}`}>{theme}</button>
};

export default function Context() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        switch
      </button>

      <ThemeContext value={theme}>
        <Button />
      </ThemeContext>
    </>
  )
}
