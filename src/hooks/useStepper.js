import { useState } from "react";


const useStepper = (totalSteps) => {
    const [step, setStep] = useState(1);


    const next = () => step < totalSteps && setStep(step + 1);
    const back = () => step > 1 && setStep(step - 1);


    return { step, next, back };
};


export default useStepper;