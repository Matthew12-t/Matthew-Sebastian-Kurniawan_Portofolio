import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        const check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        document.documentElement.classList.toggle("dark", check === "dark");
      } else {
        const check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        document.documentElement.classList.toggle("dark", check === "dark");
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!mode) return;
    window.localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
