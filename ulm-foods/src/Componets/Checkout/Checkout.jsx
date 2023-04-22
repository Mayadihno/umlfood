import {
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { commerce } from "../lib/Commerce";
import AddressForm from "./AddressForm";
import Payment from "./Payment";
import "../Checkout/Checkout.css";
import ScrollTop from "../ScrolTop/ScrollTop";

const steps = ["Shipping Address", "Payment Details"];
const Checkout = ({ cart, refreshCart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [checkOutToken, setCheckOutToken] = useState(null);

  const nextStep = () => setActiveStep((prevState) => prevState + 1);
  const backStep = () => setActiveStep((prevState) => prevState - 1);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        // console.log(token);
        // console.log(cart);
        setCheckOutToken(token);
      } catch (error) {
        // console.log(error);
      }
    };

    generateToken();
  }, [cart]);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Confirmation = () => {
    return (
      <div>
        <ScrollTop>
          <div className="col-md-12 text-center text-success mx-auto confirm">
            <h3 className="fw-bold mt-3">
              You have successfully order product from our store
            </h3>
            <h6 className="mt-2 fw-bold">Thank You </h6>

            <Button
              component={Link}
              onClick={() => refreshCart()}
              to="/home"
              variant="outlined"
            >
              Back Home
            </Button>
          </div>
        </ScrollTop>
      </div>
    );
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkOutToken={checkOutToken} next={next} />
    ) : (
      <Payment
        shippingData={shippingData}
        checkOutToken={checkOutToken}
        backStep={backStep}
        nextStep={nextStep}
        refreshCart={refreshCart}
      />
    );

  return (
    <React.Fragment>
      <div className="container mt-4 py-3">
        <main className="mx-auto">
          <Paper className="paper">
            <Typography variant="h4" align="center" className="typo">
              CheckOut details
            </Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkOutToken && <Form />
            )}
          </Paper>
        </main>
        {/* <div className="paperbottom"></div> */}
      </div>
    </React.Fragment>
  );
};

export default Checkout;
