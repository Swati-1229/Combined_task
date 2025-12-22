import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
        >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}
