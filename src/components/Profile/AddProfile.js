import React, { useContext, useState } from "react";
import { ProfileContext } from "../../context/Profilecontext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SideBar from "../sidebar";
import Header from "./Header";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const { updateProfile } = useContext(ProfileContext);
    const profileData = state?.profile;
    const isEdit = Boolean(profileData);

    const [preview, setPreview] = useState(profileData?.avatar || null);

    const initialValues = {
        name: profileData?.name || "",
        email: profileData?.email || "",
        phone: profileData?.phone || "",
        address: profileData?.address || "",
        avatar: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email required"),
        phone: Yup.string().required("Phone is required"),
        address: Yup.string().required("Address is required"),
    });

    const handleSubmit = (values) => {
        const updatedData = { ...values };

        if (values.avatar) {
            updatedData.avatar = URL.createObjectURL(values.avatar);
        } else {
            updatedData.avatar = profileData?.avatar || null;
        }

        updateProfile(updatedData);
        navigate("/ViewProfile");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* 🔹 TOP HEADER */}
            <Header />

            {/* 🔹 MAIN LAYOUT */}
            <div className="flex">
                {/* 🔹 LEFT SIDEBAR */}
                <SideBar />

                {/* 🔹 RIGHT CONTENT */}
                <div className="flex-1 p-6">
                    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded shadow">
                        <h2 className="text-xl font-bold mb-4 text-center">
                            {isEdit ? "Edit Profile" : "Add Profile"}
                        </h2>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            enableReinitialize
                        >
                            {({ setFieldValue }) => (
                                <Form className="flex flex-col gap-4">
                                    <div>
                                        <label className="block mb-1">Name</label>
                                        <Field
                                            name="name"
                                            className="w-full border p-2 rounded"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1">Email</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className="w-full border p-2 rounded"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1">Phone</label>
                                        <Field
                                            name="phone"
                                            className="w-full border p-2 rounded"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1">Address</label>
                                        <Field
                                            name="address"
                                            className="w-full border p-2 rounded"
                                        />
                                        <ErrorMessage
                                            name="address"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1">Profile Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.currentTarget.files[0];
                                                setFieldValue("avatar", file);
                                                setPreview(URL.createObjectURL(file));
                                            }}
                                        />
                                    </div>

                                    {preview && (
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-24 h-24 rounded-full mt-2 object-cover"
                                        />
                                    )}

                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md mt-4"
                                    >
                                        {isEdit ? "Save Changes" : "Add Profile"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
