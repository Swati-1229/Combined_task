import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        const data = JSON.parse(localStorage.getItem("auth"));
        return data || { isAuthenticated: false, user: null };
    });

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        const root = document.documentElement;
        theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const [section, setSection] = useState("myday");
    const handleLogout = () => {
        localStorage.removeItem("authData");
        navigate("/login");
    };

    const renderContent = () => {


        if (section === "myday") {
            return (
                <div>
                    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-600 rounded-3xl p-12">
                        <h1 className="text-3xl font-semibold text-white">My Day</h1>
                        <p className="text-white">{new Date().toDateString()}</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
            <aside className="w-64 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div>
                    <h1 className="font-semibold text-lg">To Do Application</h1>
                    Welcome {auth?.user?.email}

                    <nav className="mt-8 space-y-3 text-sm">
                        {/* <button onClick={() => setSection("myday")} className="block w-full text-left">📝 My Day</button> */}
                        <button onClick={() => navigate("/products")} className="block w-full text-left">📦 Products</button>
                        <button onClick={() => navigate("/register")} className="block w-full text-left">🧾 Registration</button>
                        <button onClick={() => navigate("/Addtask")} className="block w-full text-left">📝 Task</button>
                        <button onClick={() => navigate("/users")} className="block w-full text-left">👥 Users</button>
                        <button onClick={() => navigate("/Profile")} className="block w-full text-left">👥 Profile</button>
                        <button onClick={toggleTheme} className="mt-3 bg-blue-500 text-white px-3 py-2 rounded w-full text-left">
                            {theme === "light" ? " Dark Mode" : " Light Mode"}
                        </button>
                    </nav>
                </div>

                <div>
                    <button onClick={handleLogout} className="text-blue-600 mt-6">Log out</button>
                </div>
            </aside>

            <main className="flex-1 p-6">{renderContent()}</main>
        </div>
    );
}
