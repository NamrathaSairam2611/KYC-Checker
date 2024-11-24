// // import React from "react";

// // const ProgressBar = ({ currentStep, totalSteps, completedSteps }) => {
// //   const progressPercentage = (completedSteps.length / totalSteps) * 100;

// //   return (
// //     <div className="progress-bar">
// //       <span style={{ width: `${progressPercentage}%` }}></span>
// //     </div>
// //   );
// // };

// // export default ProgressBar;

// // import React from "react";

// // const ProgressBar = ({ currentStep, totalSteps }) => {
// //   // Calculate the progress percentage
// //   const progressPercentage = (currentStep / totalSteps) * 100;

// //   return (
// //     <div style={styles.container}>
// //       {/* Display the progress bar */}
// //       <div style={styles.barBackground}>
// //         <div
// //           style={{
// //             ...styles.progress,
// //             width: `${progressPercentage}%`,
// //           }}
// //         ></div>
// //       </div>
// //       {/* Display step indicators */}
// //       <div style={styles.stepsContainer}>
// //         {Array.from({ length: totalSteps }, (_, index) => (
// //           <div
// //             key={index + 1}
// //             style={{
// //               ...styles.step,
// //               ...(index + 1 <= currentStep ? styles.completedStep : {}),
// //             }}
// //           >
// //             {index + 1}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Inline styles for ProgressBar
// // const styles = {
// //   container: {
// //     marginBottom: "20px",
// //     textAlign: "center",
// //   },
// //   barBackground: {
// //     width: "100%",
// //     height: "10px",
// //     backgroundColor: "#d3d3d3",
// //     borderRadius: "5px",
// //     marginBottom: "10px",
// //     overflow: "hidden",
// //   },
// //   progress: {
// //     height: "100%",
// //     backgroundColor: "#007bff", // Blue progress
// //     borderRadius: "5px",
// //     transition: "width 0.3s ease-in-out",
// //   },
// //   stepsContainer: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginTop: "10px",
// //   },
// //   step: {
// //     width: "30px",
// //     height: "30px",
// //     lineHeight: "30px",
// //     borderRadius: "50%",
// //     backgroundColor: "#d3d3d3",
// //     color: "#fff",
// //     textAlign: "center",
// //     fontSize: "14px",
// //     fontWeight: "bold",
// //   },
// //   completedStep: {
// //     backgroundColor: "#007bff", // Blue for completed steps
// //   },
// // };

// // export default ProgressBar;

// const ProgressBar = ({ currentStep, totalSteps, completedSteps }) => {
//   return (
//     <div style={styles.container}>
//       {/* Progress bar */}
//       <div style={styles.barBackground}>
//         <div
//           style={{
//             ...styles.progress,
//             width: `${(completedSteps.length / totalSteps) * 100}%`,
//           }}
//         ></div>
//       </div>
//       {/* Step indicators */}
//       <div style={styles.stepsContainer}>
//         {Array.from({ length: totalSteps }, (_, index) => (
//           <div
//             key={index + 1}
//             style={{
//               ...styles.step,
//               ...(completedSteps.includes(index + 1)
//                 ? styles.completedStep
//                 : {}),
//               ...(index + 1 === currentStep &&
//               !completedSteps.includes(index + 1)
//                 ? styles.currentStep
//                 : {}),
//             }}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   barBackground: {
//     width: "100%",
//     height: "10px",
//     backgroundColor: "#d3d3d3",
//     borderRadius: "5px",
//     marginBottom: "10px",
//     overflow: "hidden",
//   },
//   progress: {
//     height: "100%",
//     backgroundColor: "#007bff",
//     borderRadius: "5px",
//     transition: "width 0.3s ease-in-out",
//   },
//   stepsContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: "10px",
//   },
//   step: {
//     width: "30px",
//     height: "30px",
//     lineHeight: "30px",
//     borderRadius: "50%",
//     backgroundColor: "#d3d3d3",
//     color: "#fff",
//     textAlign: "center",
//     fontSize: "14px",
//     fontWeight: "bold",
//   },
//   completedStep: {
//     backgroundColor: "#007bff",
//   },
//   currentStep: {
//     borderColor: "#007bff",
//     borderWidth: "2px",
//     borderStyle: "solid",
//   },
// };

// export default ProgressBar;

// import React from "react";

// const ProgressBar = ({ currentStep, totalSteps, completedSteps }) => {
//   const progressPercentage = (completedSteps.length / totalSteps) * 100;

//   return (
//     <div className="progress-bar">
//       <span style={{ width: `${progressPercentage}%` }}></span>
//     </div>
//   );
// };

// export default ProgressBar;

import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  // Calculate the progress percentage
  const progressPercentage =
    currentStep == 1 ? 0 : currentStep == 2 ? 50 : currentStep == 3 ? 100 : 0;
  return (
    <div style={styles.container}>
      {/* Display the progress bar */}
      <div style={styles.barBackground}>
        <div
          style={{
            ...styles.progress,
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
      {/* Display step indicators */}
      <div style={styles.stepsContainer}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index + 1}
            style={{
              ...styles.step,
              ...(index + 1 <= currentStep ? styles.completedStep : {}),
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles for ProgressBar
const styles = {
  container: {
    marginBottom: "20px",
    textAlign: "center",
  },
  barBackground: {
    width: "100%",
    height: "10px",
    backgroundColor: "#d3d3d3",
    borderRadius: "5px",
    marginBottom: "10px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#007bff", // Blue progress
    borderRadius: "5px",
    transition: "width 0.3s ease-in-out",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  step: {
    width: "30px",
    height: "30px",
    lineHeight: "30px",
    borderRadius: "50%",
    backgroundColor: "#d3d3d3",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
  completedStep: {
    backgroundColor: "#007bff", // Blue for completed steps
  },
};

export default ProgressBar;
