import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    isDarkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
    >
      {isDarkMode ? (
        <FaSun className="h-6 w-6" />
      ) : (
        <FaMoon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
