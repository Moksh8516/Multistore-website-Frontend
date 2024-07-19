import React, { useState } from "react";
import { Cart } from "../../components";
import { useLocation } from "react-router-dom";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";
import CheckoutForm from "./CheckoutForm";
const steps = ["Login", "Delivery", "Checkout", "Payment"];
function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();
  const reqParams = new URLSearchParams(location.search);
  const querySteps = parseInt(reqParams.get("step"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  let width = "620px";
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 text-lg lg:px-8">
      <div className={`m-2 mt-4`}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={querySteps}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              </Box>
              <div>{querySteps == 2 ? <Cart /> : <CheckoutForm />}</div>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Checkout;
