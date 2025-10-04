import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className=" flex items-center font-sans  shadow shadow-white  justify-between py-5 px-5 bg-gray-300 text-black dark:bg-slate-800 dark:text-gray-200">
      <nav>
        <ul className="flex gap-4 font-medium capitalize">
          <li>home</li>
          <li>aboutUs</li>
          <li>contact us</li>
        </ul>
      </nav>
      <div>
        <button
          onClick={toggleTheme}
          className="cursor-pointer transition-all delay-150 ease-in-out"
        >
          {theme === "dark" ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
        </button>
      </div>
    </div>
  );
};

export default Header;
