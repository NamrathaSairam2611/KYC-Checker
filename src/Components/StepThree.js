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
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      country: formData.country,
      idDocument: formData.idDocument,
    },
    mode: "onChange", // Enable live validation
  });

  const onSubmit = (data) => {
    updateFormData("country", data.country);
    updateFormData("idDocument", data.idDocument);
    markStepComplete(3); // Mark this step as completed
    navigate("/summary");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateFormData("idDocument", file);
      setValue("idDocument", file, { shouldValidate: true }); // Sync validation
    }
  };

  return (
    <div className="container">
      <form className="formClass" onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar
          currentStep={3}
          totalSteps={3}
          completedSteps={completedSteps}
        />
        <h2>Step 3: Country and ID Verification</h2>

        {/* Country Field */}
        <div style={{ marginBottom: "30px" }}>
          <label>
            Country <span className="required">*</span>
          </label>
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

        {/* ID Document Field */}
        {/* <div>
          <label>
            ID Document <span className="required">*</span>
          </label>
          <Controller
            name="idDocument"
            control={control}
            rules={{
              required: "ID Document is required",
              validate: (value) =>
                value instanceof File || "Please upload a valid file",
            }}
            render={({ field }) => (
              <input
                type="file"
                style={{ width: "95%" }}
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleFileUpload(e);
                  field.onChange(file); // Sync React Hook Form validation
                }}
              />
            )}
          />
          {errors.idDocument && (
            <p className="alert">{errors.idDocument.message}</p>
          )}
          {formData.idDocument && (
            <p>Uploaded File: {formData.idDocument.name}</p>
          )}
        </div> */}
        <div>
          <label>
            ID Document <span className="required">*</span>
          </label>
          <Controller
            name="idDocument"
            control={control}
            rules={{
              required: "ID Document is required",
              validate: (value) =>
                value instanceof File || "Please upload a valid file",
            }}
            render={({ field }) => (
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                style={{ width: "95%" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleFileUpload(e);
                  field.onChange(file);
                }}
              />
            )}
          />
          {errors.idDocument && (
            <p className="alert">{errors.idDocument.message}</p>
          )}

          {/* File Preview */}
          {formData.idDocument && (
            <div style={{ marginTop: "10px" }}>
              {formData.idDocument.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(formData.idDocument)}
                  alt="Uploaded Preview"
                  style={{
                    width: "100px",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              ) : (
                <a
                  href={URL.createObjectURL(formData.idDocument)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Uploaded File
                </a>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="buttons" style={{ marginTop: "35px" }}>
          <button type="button" onClick={() => navigate("/step-two")}>
            Back
          </button>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
