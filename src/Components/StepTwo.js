import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useFormContext } from "../Context/FormContext";
import ProgressBar from "./ProgressBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StepTwo = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, markStepComplete, completedSteps } =
    useFormContext();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      dob: formData.dob || "",
      address: formData.address,
    },
    mode: "onChange",
  });

  const userDobRef = useRef(null);

  const onSubmit = (data) => {
    updateFormData("dob", data.dob);
    updateFormData("address", data.address);
    markStepComplete(2);
    navigate("/step-three");
  };

  return (
    <div className="container">
      <form className="formClass" onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar
          currentStep={2}
          totalSteps={3}
          completedSteps={completedSteps}
        />
        <h2>Step 2: Address and Date of Birth</h2>

        {/* Date of Birth Field */}
        <div style={{ marginBottom: "30px" }}>
          <label>
            Date of Birth <span className="required">*</span>
          </label>
          <Controller
            name="dob"
            control={control}
            rules={{
              required: "Date of Birth is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const today = new Date();
                if (selectedDate > today) {
                  return "Date of Birth cannot be in the future";
                }
                return true;
              },
            }}
            render={({ field }) => (
              <span className="date-pick">
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  placeholderText="Select a date"
                  popperPlacement="bottom-start"
                  style={{
                    fontSize: "14px",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                  onKeyDown={(e) => e.preventDefault()}
                />
              </span>
            )}
          />

          {errors.dob && <p className="alert">{errors.dob.message}</p>}
        </div>

        {/* Address Field */}
        <div>
          <label>
            Address <span className="required">*</span>
          </label>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => (
              <input style={{ width: "90%" }} {...field} />
            )}
          />
          {errors.address && <p className="alert">{errors.address.message}</p>}
        </div>

        <div className="buttons" style={{ marginTop: "35px" }}>
          <button type="button" onClick={() => navigate("/")}>
            Back
          </button>
          <button type="submit" disabled={!isValid}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
