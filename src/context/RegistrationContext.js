import { createContext, useState } from "react";


export const RegistrationContext = createContext();


export const RegistrationProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        personal: {},
        address: {},
        documents: {}
    });


    const updateFormData = (step, data) => {
        setFormData(prev => ({
            ...prev,
            [step]: data
        }));
    };


    return (
        <RegistrationContext.Provider value={{ formData, updateFormData }}>
            {children}
        </RegistrationContext.Provider>
    );
};