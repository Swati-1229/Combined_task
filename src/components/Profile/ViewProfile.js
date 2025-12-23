import { useContext } from "react";
import { ProfileContext } from "../../context/Profilecontext";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "../sidebar";

export default function ViewProfile() {
    const contextValue = useContext(ProfileContext);

    if (!contextValue) {
        return (
            <div className="p-6 text-center text-gray-500">
                Profile context not available
            </div>
        );
    }

    const { profile } = contextValue;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* 🔹 TOP HEADER */}
            <Header />

            {/* 🔹 MAIN LAYOUT */}
            <div className="flex">
                {/* 🔹 LEFT SIDEBAR */}
                <SideBar />

                {/* 🔹 RIGHT CONTENT */}
                <div className="flex-1 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
                            {/* Banner */}
                            <div className="h-28 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                            <div className="px-6 sm:px-8 pb-8">
                                {/* Avatar */}
                                <div className="flex flex-col items-center -mt-16 mb-6">
                                    {profile?.avatar ? (
                                        <img
                                            src={profile.avatar}
                                            alt={profile.name}
                                            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                                        />
                                    ) : (
                                        <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                                            <User className="w-14 h-14 text-white" />
                                        </div>
                                    )}
                                </div>

                                {profile?.name ? (
                                    <>
                                        {/* Name */}
                                        <div className="text-center mb-6">
                                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                                {profile.name}
                                            </h1>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>

                                        {/* Details */}
                                        <div className="space-y-4">
                                            {/* Email */}
                                            <div className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition">
                                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 text-white">
                                                    <Mail size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Email</p>
                                                    <p className="font-semibold break-all">
                                                        {profile.email}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-indigo-50 transition">
                                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500 text-white">
                                                    <Phone size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Phone</p>
                                                    <p className="font-semibold">
                                                        {profile.phone}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Address */}
                                            <div className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-purple-50 transition">
                                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500 text-white">
                                                    <MapPin size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Address</p>
                                                    <p className="font-semibold">
                                                        {profile.address}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <div className="mt-8 flex">
                                            <Link
                                                to="/Profile"
                                                state={{ profile }}
                                                className="flex-1 px-6 py-3 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition shadow-md"
                                            >
                                                Edit Profile
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* No Data */}
                                        <div className="text-center text-gray-500">
                                            No profile data available
                                        </div>

                                        <div className="mt-8 flex">
                                            <Link
                                                to="/Profile"
                                                className="flex-1 px-6 py-3 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition shadow-md"
                                            >
                                                Add Profile
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
