import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Email and Password are required");
            return;
        }

        const existingUser = JSON.parse(localStorage.getItem("todoUser"));
        if (existingUser?.email === email) {
            setError("User already exists. Please login.");
            return;
        }

        localStorage.setItem(
            "todoUser",
            JSON.stringify({ email, password })
        );

        alert("Signup Successful!");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black px-4">
            <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Create Account
                </h1>
                <p className="text-center text-gray-300 mb-8">
                    Sign up to get started
                </p>
                <form onSubmit={handleSignup} className="space-y-6">
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
                            placeholder="Create a strong password"
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
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-300">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
