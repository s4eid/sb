import React, { useState } from "react";
import Pay from "./Pay/Pay";
import payment from "./payment.module.scss";
import Address from "./Address/Address";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Plan from "./Plan/Plan";

const Paymentpage = () => {
  const [progress, setProgress] = useState(0);
  const steps = ["Select Your Plan", "Address And Contact Infos", "Payment"];
  return (
    <div className={payment.mainC}>
      <div className={payment.progress}>
        <Stepper activeStep={progress} alternativeLabel>
          {steps.map((label, index) => (
            <Step
              className={payment.step}
              onClick={() => setProgress(index)}
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {progress == 0 ? (
        <Plan setProgress={setProgress} />
      ) : progress == 1 ? (
        <Address setProgress={setProgress} />
      ) : (
        <Pay />
      )}
    </div>
  );
};

export default Paymentpage;