import React from "react";

const ProgressBar = ({ currentStep, totalSteps, completedSteps }) => {
  const progressPercentage = (completedSteps.length / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <span style={{ width: `${progressPercentage}%` }}></span>
    </div>
  );
};

export default ProgressBar;
