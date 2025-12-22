import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { RegistrationContext } from "../../../context/RegistrationContext";

const schema = Yup.object({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
});

const Step1Personal = ({ onNext }) => {
    const { updateFormData } = useContext(RegistrationContext);

    return (
        <div className="w-full">
            {/* MAIN FORM BOX */}
            <div className="w-full max-w-md bg-[#322b4f] rounded-lg shadow-md p-6 mx-auto">
                {/* Header */}
                <h2 className="text-2xl font-semibold text-white mb-1">
                    Create Account
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                    Fill your personal details
                </p>

                <Formik
                    initialValues={{ firstName: "", lastName: "", email: "" }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        updateFormData("personal", values);
                        onNext();
                    }}
                >
                    <Form className="space-y-4">

                        {/* First Name */}
                        <div>
                            <label className="text-sm text-gray-300">First Name</label>
                            <Field
                                name="firstName"
                                className="w-full mt-1 px-3 py-2 rounded-md bg-[#3b345c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-red-400 text-xs mt-1"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="text-sm text-gray-300">Last Name</label>
                            <Field
                                name="lastName"
                                className="w-full mt-1 px-3 py-2 rounded-md bg-[#3b345c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-red-400 text-xs mt-1"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-300">Email</label>
                            <Field
                                name="email"
                                type="email"
                                className="w-full mt-1 px-3 py-2 rounded-md bg-[#3b345c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-400 text-xs mt-1"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                        >
                            Next
                        </button>

                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Step1Personal;
