import { useState } from "react";
import { useTodos } from "../../context/TodoContext";
import SideBar from "../sidebar";

export default function TodoAppPage() {
    const { todos, dispatch, ACTIONS } = useTodos();
    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null);

    const handleAdd = () => {
        if (!text) return;
        if (editId) {
            dispatch({ type: ACTIONS.EDIT, payload: { id: editId, text } });
            setEditId(null);
        } else {
            dispatch({
                type: ACTIONS.ADD,
                payload: { id: Date.now(), text, completed: false },
            });
        }
        setText("");
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">

            {/* LEFT SIDEBAR */}
            <SideBar />

            {/* RIGHT CONTENT */}
            <main className="flex-1 p-6">
                <div className="max-w-md mx-auto p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
                    <h1 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        Todo App
                    </h1>

                    {/* INPUT */}
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter todo"
                            className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        />
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            {editId ? "Edit" : "Add"}
                        </button>
                    </div>

                    {/* TODO LIST */}
                    <ul>
                        {todos.map((t) => (
                            <li
                                key={t.id}
                                className="flex justify-between items-center mb-2 p-2 rounded bg-white dark:bg-gray-700"
                            >
                                <span
                                    className={`flex-1 text-gray-900 dark:text-gray-100 ${t.completed
                                            ? "line-through text-gray-400 dark:text-gray-400"
                                            : ""
                                        }`}
                                >
                                    {t.text}
                                </span>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() =>
                                            dispatch({ type: ACTIONS.TOGGLE, payload: t.id })
                                        }
                                        className="px-2 py-1 bg-green-500 text-white rounded"
                                    >
                                        {t.completed ? "Undo" : "Done"}
                                    </button>

                                    <button
                                        onClick={() => {
                                            setEditId(t.id);
                                            setText(t.text);
                                        }}
                                        className="px-2 py-1 bg-yellow-500 text-white rounded"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            dispatch({ type: ACTIONS.DELETE, payload: t.id })
                                        }
                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}
