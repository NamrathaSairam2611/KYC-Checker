import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useFormContext } from "../Context/FormContext";
import ProgressBar from "./ProgressBar";

const StepTwo = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, markStepComplete, completedSteps } =
    useFormContext();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dob: formData.dob,
      address: formData.address,
    },
  });

  const onSubmit = (data) => {
    updateFormData("dob", data.dob);
    updateFormData("address", data.address);
    markStepComplete(2);
    navigate("/step-three");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar
          currentStep={2}
          totalSteps={3}
          completedSteps={completedSteps}
        />
        <h2>Step 2: Address and Date of Birth</h2>
        <div>
          <label>Date of Birth</label>
          <Controller
            name="dob"
            control={control}
            rules={{ required: "Date of Birth is required" }}
            render={({ field }) => <input type="date" {...field} />}
          />
          {errors.dob && <p className="alert">{errors.dob.message}</p>}
        </div>

        <div>
          <label>Address</label>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => <input {...field} />}
          />
          {errors.address && <p className="alert">{errors.address.message}</p>}
        </div>
        <div className="buttons">
          <button type="button" onClick={() => navigate("/")}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
