import React from "react";
import Review from "./Review";
import { Divider, Typography } from "@mui/material";
import FormCom from "./FormCom";
import ScrollTop from "../ScrolTop/ScrollTop";
import "../Checkout/Payment.css";
import PayPalpayment from "../Paypal/PayPalpayment";

const PaymentForm = ({
  checkOutToken,
  backStep,
  shippingData,
  nextStep,
  refreshCart,
}) => {
  return (
    <React.Fragment>
      <ScrollTop>
        <Review checkOutToken={checkOutToken} />
        <Divider />
        <Typography variant="h6" gutterBottom style={{ margin: "20px 0px" }}>
          Payment Method
        </Typography>
        <Typography variant="body1" gutterBottom style={{ margin: "20px 0px" }}>
          Choose any Method Of Payment
        </Typography>
        <div className="payment">
          <PayPalpayment
            checkOutToken={checkOutToken}
            shippingData={shippingData}
            nextStep={nextStep}
            refreshCart={refreshCart}
          />

          <p>Payment On Pickup</p>
        </div>
        <FormCom
          checkOutToken={checkOutToken}
          backStep={backStep}
          shippingData={shippingData}
          nextStep={nextStep}
          refreshCart={refreshCart}
        />
      </ScrollTop>
    </React.Fragment>
  );
};

export default PaymentForm;
