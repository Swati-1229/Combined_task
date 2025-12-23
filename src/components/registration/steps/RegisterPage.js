// import useStepper from "../hooks/useStepper";
// import Step1Personal from "../components/steps/Step1Personal";
// import Step2Address from "../components/steps/Step2Address";
// import Step3Documents from "../components/steps/Step3Documents";
// import Step4Review from "../components/steps/Step4Review";


// const RegisterPage = () => {
//     const { step, next, back } = useStepper(4);


//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow">
//                 {step === 1 && <Step1Personal onNext={next} />}
//                 {step === 2 && <Step2Address onNext={next} onBack={back} />}
//                 {step === 3 && <Step3Documents onNext={next} onBack={back} />}
//                 {step === 4 && <Step4Review />}
//             </div>
//         </div>
//     );
// };


// export default RegisterPage;


import useStepper from "../../../hooks/useStepper";
import Stepper from "../Stepper";

import Step1Personal from "./Step1Personal";
import Step2Address from "./Step2Address";
import Step3Documents from "./Step3Documents";
import Step4Review from "./Step4Review";
import SideBar from "../../sidebar";

const RegisterPage = () => {
    const { step, next, back } = useStepper(4);

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
            <SideBar />
            <main className="flex-1 flex items-center justify-center p-6">
                <div className="bg-white dark:bg-gray-800 w-full max-w-lg p-6 rounded-xl shadow-lg overflow-y-auto">
                    <Stepper step={step} />
                    {step === 1 && <Step1Personal onNext={next} />}
                    {step === 2 && <Step2Address onNext={next} onBack={back} />}
                    {step === 3 && <Step3Documents onNext={next} onBack={back} />}
                    {step === 4 && <Step4Review />}
                </div>
            </main>
        </div>
    );
};

export default RegisterPage;
