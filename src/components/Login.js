import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const saved = JSON.parse(localStorage.getItem("todoUser"));

        if (!saved) {
            setError("You must sign up first!");
            return;
        }

        if (saved.email === email && saved.password === password) {
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    isAuthenticated: true,
                    user: saved,
                })
            );
            navigate("/dashboard");
        } else {
            setError("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black px-4">
            <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
                <p className="text-center text-gray-300 mb-8">
                    Login to continue
                </p>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none"
                            required
                        />
                    </div>
                    {error && (
                        <p className="text-red-400 text-sm text-center">
                            {error}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition font-semibold text-lg shadow-lg"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-300">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-purple-400 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
