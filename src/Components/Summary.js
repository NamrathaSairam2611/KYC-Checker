import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../Context/FormContext";

const Summary = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();

  return (
    <div className="container">
      <h2>Summary</h2>
      <p>First Name: {formData.firstName || "Not Provided"}</p>
      <p>Last Name: {formData.lastName || "Not Provided"}</p>
      <p>Date of Birth: {formData.dob || "Not Provided"}</p>
      <p>Address: {formData.address || "Not Provided"}</p>
      <p>Country: {formData.country || "Not Provided"}</p>
      <p>
        ID Document:{" "}
        {formData.idDocument ? formData.idDocument.name : "Not Uploaded"}
      </p>
      <div className="buttons">
        <button onClick={() => navigate("/step-three")}>Edit</button>
        <button
          onClick={() => {
            alert("Form Submitted Successfully!");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
