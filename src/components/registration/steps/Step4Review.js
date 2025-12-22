import { useContext } from "react";
import { RegistrationContext } from "../../../context/RegistrationContext";
import { useNavigate } from "react-router-dom";

const Step4Review = () => {
    const { formData } = useContext(RegistrationContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const newUser = {
            firstName: formData.personal?.firstName,
            lastName: formData.personal?.lastName,
            email: formData.personal?.email,
            phone: formData.personal?.phone,
            city: formData.address?.city,
            country: formData.address?.country,
            documentName: formData.documents?.file?.name || "",
        };

        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
        alert("Registration Successful");
        navigate("/users");
    };

    return (
        <div className="w-full px-4">
            {/* CARD */}
            <div className="w-full max-w-lg bg-[#322b4f] rounded-lg shadow-xl p-6 mx-auto text-white">

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-1">
                    Review & Submit
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                    Please verify your details before submission
                </p>

                {/* REVIEW SECTIONS */}
                <div className="space-y-4 text-sm">

                    {/* Personal */}
                    <div className="bg-[#3a335a] rounded-md p-4">
                        <h3 className="font-semibold text-purple-300 mb-2">
                            Personal Details
                        </h3>
                        <p>Name: {formData.personal?.firstName} {formData.personal?.lastName}</p>
                        <p>Email: {formData.personal?.email}</p>
                    </div>

                    {/* Address */}
                    <div className="bg-[#3a335a] rounded-md p-4">
                        <h3 className="font-semibold text-purple-300 mb-2">
                            Address Details
                        </h3>
                        <p>City: {formData.address?.city}</p>
                        <p>Country: {formData.address?.country}</p>
                    </div>

                    {/* Document */}
                    <div className="bg-[#3a335a] rounded-md p-4">
                        <h3 className="font-semibold text-purple-300 mb-2">
                            Uploaded Document
                        </h3>
                        <p className="text-gray-300">
                            {formData.documents?.file?.name || "No file uploaded"}
                        </p>
                    </div>

                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full mt-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition font-medium"
                >
                    Submit Registration
                </button>
            </div>
        </div>
    );
};

export default Step4Review;
