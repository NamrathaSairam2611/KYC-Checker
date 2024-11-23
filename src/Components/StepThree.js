import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useFormContext } from "../Context/FormContext";
import ProgressBar from "./ProgressBar";

const StepThree = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, markStepComplete, completedSteps } =
    useFormContext();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: formData.country,
      idDocument: formData.idDocument,
    },
  });

  const onSubmit = (data) => {
    updateFormData("country", data.country);
    markStepComplete(3);
    navigate("/summary");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateFormData("idDocument", file);
      setValue("idDocument", file); // Sync with React Hook Form
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar
          currentStep={3}
          totalSteps={3}
          completedSteps={completedSteps}
        />
        <h2>Step 3: Country and ID Verification</h2>
        <div>
          <label>Country</label>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            )}
          />
          {errors.country && <p className="alert">{errors.country.message}</p>}
        </div>

        <div>
          <label>ID Document</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileUpload}
          />
          {formData.idDocument && (
            <p>Uploaded File: {formData.idDocument.name}</p>
          )}
        </div>
        <div className="buttons">
          <button type="button" onClick={() => navigate("/step-two")}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
