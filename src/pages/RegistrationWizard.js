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




import { RegistrationProvider } from "../context/RegistrationContext";
import RegisterPage from "../components/registration/steps/RegisterPage";

export default function RegisterWizard() {
    return (

        <RegistrationProvider>
            <RegisterPage />
        </RegistrationProvider>
    );
}