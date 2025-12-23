import { useContext, useState } from "react";
import { RegistrationContext } from "../../../context/RegistrationContext";

const Step3Documents = ({ onNext, onBack }) => {
    const { updateFormData } = useContext(RegistrationContext);
    const [file, setFile] = useState(null);

    const handleNext = () => {
        updateFormData("documents", { file });
        onNext();
    };

    return (
        <div className="w-full">
            <div className="w-full max-w-md bg-blue-400 rounded-lg shadow-lg p-6 mx-auto text-white">
                <h2 className="text-2xl font-semibold mb-1">Upload Document</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Upload your ID or supporting document
                </p>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-purple-600 rounded-lg p-6 cursor-pointer hover:bg-[#3a335a] transition">
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <span className="text-purple-600 text-sm">
                        {file ? file.name : "Click to upload file"}
                    </span>
                    <span className="text-xs text-gray-600 mt-1">
                        PDF, JPG or PNG
                    </span>
                </label>
                <div className="flex justify-between pt-6">
                    <button
                        onClick={onBack}
                        className="px-4 py-2 rounded-md border border-gray-600 text-black hover:bg-gray-600 transition"
                    >
                        Back
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={!file}
                        className="px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-black font-medium disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step3Documents;
