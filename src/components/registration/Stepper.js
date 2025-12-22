const Stepper = ({ step }) => {
    const steps = ["Personal", "Address", "Documents", "Review"];

    return (
        <div className="flex items-center justify-between mb-6">
            {steps.map((label, index) => {
                const stepNumber = index + 1;
                const isActive = step >= stepNumber;

                return (
                    <div key={label} className="flex items-center w-full">

                        {/* Circle */}
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                            ${isActive ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"}`}
                        >
                            {stepNumber}
                        </div>

                        {/* Label */}
                        <span
                            className={`ml-2 text-sm hidden sm:block
                            ${isActive ? "text-purple-600" : "text-gray-400"}`}
                        >
                            {label}
                        </span>

                        {/* Line */}
                        {stepNumber !== steps.length && (
                            <div
                                className={`flex-1 h-[2px] mx-2
                                ${step > stepNumber ? "bg-purple-600" : "bg-gray-300"}`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;
