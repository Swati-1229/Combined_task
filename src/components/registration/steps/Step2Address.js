import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { RegistrationContext } from "../../../context/RegistrationContext";

const schema = Yup.object({
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
});

const Step2Address = ({ onNext, onBack }) => {
    const { updateFormData } = useContext(RegistrationContext);

    return (
        <div className="w-full">
            {/* CARD */}
            <div className="w-full max-w-md bg-blue-400 rounded-lg shadow-lg p-6 mx-auto text-white">

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-1">Address Details</h2>
                <p className="text-sm text-gray-300 mb-6">
                    Tell us where you live
                </p>

                <Formik
                    initialValues={{ city: "", country: "" }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        updateFormData("address", values);
                        onNext();
                    }}
                >
                    <Form className="space-y-4">

                        {/* City */}
                        <div>
                            <label className="text-sm text-gray-500">City</label>
                            <Field
                                name="city"
                                placeholder="Enter your city"
                                className="w-full mt-1 px-3 py-2 rounded-md bg-blue-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="city"
                                component="div"
                                className="text-red-400 text-xs mt-1"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Country</label>
                            <Field
                                name="country"
                                placeholder="Enter your country"
                                className="w-full mt-1 px-3 py-2 rounded-md bg-blue-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="country"
                                component="div"
                                className="text-red-400 text-xs mt-1"
                            />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button
                                type="button"
                                onClick={onBack}
                                className="px-4 py-2 rounded-md border border-gray-400 text-black hover:bg-gray-600 transition"
                            >
                                Back
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition font-medium text-black"
                            >
                                Next
                            </button>
                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Step2Address;
