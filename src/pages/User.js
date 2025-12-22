import { useState, useEffect } from "react";
import SideBar from "../components/sidebar";

export default function Users() {
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("users");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleDelete = (index) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">

            {/* LEFT SIDEBAR */}
            <SideBar />

            {/* RIGHT CONTENT */}
            <main className="flex-1 p-6">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Users</h1>

                    <input
                        placeholder="Search"
                        className="border px-3 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* TABLE */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-blue-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                            <tr>
                                <th className="p-4">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Phone</th>
                                <th className="p-4">City</th>
                                <th className="p-4">State</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="p-6 text-center text-gray-500">
                                        No users registered
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, index) => (
                                    <tr
                                        key={index}
                                        className="border-t dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition"
                                    >
                                        <td className="p-4 font-medium">
                                            {user.firstName} {user.lastName}
                                        </td>
                                        <td className="p-4">{user.email}</td>
                                        <td className="p-4">{user.phone}</td>
                                        <td className="p-4">{user.city}</td>
                                        <td className="p-4">{user.state}</td>
                                        <td className="p-4 flex gap-4">
                                            <button className="text-purple-600 hover:underline">
                                                View
                                            </button>
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="text-red-600 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* FOOTER */}
                <div className="flex justify-between items-center mt-4 text-sm">
                    <span>Showing {users.length} users</span>

                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                            Prev
                        </button>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded">
                            1
                        </button>
                        <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                            Next
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
