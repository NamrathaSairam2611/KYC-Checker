import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import Summary from "./Components/Summary";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
