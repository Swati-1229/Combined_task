import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function SideBar() {
    const navigate = useNavigate();
    const location = useLocation(); // get current path
    const { theme, toggleTheme } = useTheme();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    const menuItems = [
        { label: "Products", path: "/products", icon: "📦" },
        { label: "Profile", path: "/Profile", icon: "👥" },
        { label: "Registration", path: "/register", icon: "🧾" },
        { label: "Task", path: "/Addtask", icon: "📝" },
        { label: "Users", path: "/users", icon: "👥" },

    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between min-h-screen">
            <div>
                <h1 className="font-semibold text-lg mb-4">To Do Application</h1>

                <nav className="space-y-3 text-sm">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={`block w-full text-left px-3 py-2 rounded transition
                  ${isActive
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {item.icon} {item.label}
                            </button>
                        );
                    })}

                    <button
                        onClick={toggleTheme}
                        className="mt-4 bg-blue-500 text-white px-3 py-2 rounded w-full text-left"
                    >
                        {theme === "light" ? " Dark Mode" : " Light Mode"}
                    </button>
                </nav>
            </div>

            <button
                onClick={handleLogout}
                className="text-blue-600 mt-6 text-sm"
            >
                Log out
            </button>
        </aside>
    );
}
