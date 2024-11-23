import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useFormContext } from "../Context/FormContext";
import ProgressBar from "./ProgressBar";

const StepOne = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, markStepComplete, completedSteps } =
    useFormContext();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
    },
  });

  const onSubmit = (data) => {
    updateFormData("firstName", data.firstName);
    updateFormData("lastName", data.lastName);
    markStepComplete(1);
    navigate("/step-two");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar
          currentStep={1}
          totalSteps={3}
          completedSteps={completedSteps}
        />
        <h2>Step 1: Personal Information</h2>
        <div>
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => <input {...field} />}
          />
          {errors.firstName && (
            <p className="alert">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => <input {...field} />}
          />
          {errors.lastName && (
            <p className="alert">{errors.lastName.message}</p>
          )}
        </div>

        <div className="buttons">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
