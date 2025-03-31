import { useState } from "react";
// import { useCookies } from "react-cookie";
// import { cookies } from "next/headers";

const useDarkMode = (defaultTheme: Promise<string> | string = "dark") => {
  const [theme, setTheme] = useState(defaultTheme);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [_, setCookie] = useCookies(["theme"]);

  const setAndSaveTheme = (theme: string) => {
    setTheme(theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    // const cookieStore = await cookies()
    // cookieStore.set('theme', theme);
  };
  const toggleTheme = () => {
    setAndSaveTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
