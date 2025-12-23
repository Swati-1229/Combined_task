import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">
                    Profile Manager
                </h1>
                <nav className="flex gap-6">
                    <NavLink
                        to="/Profile"
                        className={({ isActive }) =>
                            `flex items-center gap-1 font-medium ${isActive ? 'text-white' : 'text-black-600'
                            }`
                        }
                    >
                        <User size={18} />
                        Add New
                    </NavLink>
                    <NavLink
                        to="/ViewProfile"
                        className={({ isActive }) =>
                            `flex items-center gap-1 font-medium ${isActive ? 'text-white' : 'text-black-600'
                            }`
                        }
                    >
                        <User size={18} />
                        View Profile
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
