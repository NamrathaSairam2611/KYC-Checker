// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useFormContext } from "../Context/FormContext";
// import { useForm } from "react-hook-form";

// const Summary = () => {
//   const navigate = useNavigate();
//   const { formData, updateFormData } = useFormContext();
//   const { reset } = useForm(); // React Hook Form reset function

//   const handleSubmit = () => {
//     // Clear form context data
//     updateFormData("firstName", "");
//     updateFormData("lastName", "");
//     updateFormData("dob", {});
//     updateFormData("address", "");
//     updateFormData("country", "");
//     updateFormData("idDocument", null);

//     // Reset form state in react-hook-form
//     reset();

//     // Show alert and redirect
//     alert("Form Submitted Successfully!");
//     navigate("/"); // Redirect to home route
//   };

//   return (
//     <div className="container">
//       <h2>Summary</h2>
//       <p>First Name: {formData.firstName || "Not Provided"}</p>
//       <p>Last Name: {formData.lastName || "Not Provided"}</p>
//       <p>Date of Birth: {formData.dob || "Not Provided"}</p>
//       <p>Address: {formData.address || "Not Provided"}</p>
//       <p>Country: {formData.country || "Not Provided"}</p>
//       <p>
//         ID Document:{" "}
//         {formData.idDocument ? formData.idDocument.name : "Not Uploaded"}
//       </p>
//       <div className="buttons">
//         <button onClick={() => navigate("/step-three")}>Edit</button>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Summary;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../Context/FormContext";
import { useForm } from "react-hook-form";

const Summary = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();
  const { reset } = useForm(); // React Hook Form reset function

  const handleSubmit = () => {
    // Clear form context data
    updateFormData("firstName", "");
    updateFormData("lastName", "");
    updateFormData("dob", ""); // Reset dob to an empty string
    updateFormData("address", "");
    updateFormData("country", "");
    updateFormData("idDocument", null);

    // Reset form state in react-hook-form
    reset();

    // Show alert and redirect
    alert("Form Submitted Successfully!");
    navigate("/"); // Redirect to home route
  };

  return (
    <div className="container">
      <h2>Summary</h2>
      <p>
        First Name: <strong>{formData.firstName || "Not Provided"}</strong>
      </p>
      <p>
        Last Name: <strong>{formData.lastName || "Not Provided"}</strong>
      </p>
      <p>
        Date of Birth:{" "}
        <strong>
          {formData.dob
            ? new Date(formData.dob).toLocaleDateString()
            : "Not Provided"}
        </strong>
      </p>
      <p>
        Address: <strong>{formData.address || "Not Provided"}</strong>
      </p>
      <p>
        Country: <strong>{formData.country || "Not Provided"}</strong>
      </p>
      <p>
        ID Document:{" "}
        <strong>
          {formData.idDocument ? formData.idDocument.name : "Not Uploaded"}
        </strong>
      </p>
      <div className="buttons">
        <button onClick={() => navigate("/step-three")}>Edit</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Summary;
