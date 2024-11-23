import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    country: "",
    idDocument: null,
  });

  const [completedSteps, setCompletedSteps] = useState([]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const markStepComplete = (step) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        completedSteps,
        markStepComplete,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
