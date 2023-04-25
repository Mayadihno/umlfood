import React, { useState } from "react";
import Review from "./Review";
import { Divider, Typography } from "@mui/material";
import FormCom from "./FormCom";
import ScrollTop from "../ScrolTop/ScrollTop";
import "../Checkout/Payment.css";
import PayPalpayment from "../Paypal/PayPalpayment";
import Payment from "../Stripe/Payment";
import { BsPaypal, BsCreditCard } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
const PaymentForm = ({
  checkOutToken,
  backStep,
  shippingData,
  nextStep,
  refreshCart,
}) => {
  const [card, setCard] = useState(true);
  const [payPal, setPayPal] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const handleCard = () => {
    setCard(!card);
    setDelivery(false);
    setPayPal(false);
  };
  const handlePaypal = () => {
    setCard(false);
    setDelivery(false);
    setPayPal(true);
  };
  const handleDelivery = () => {
    setCard(false);
    setDelivery(true);
    setPayPal(false);
  };
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
          <button onClick={handleCard} className="d-flex gap-1 button ">
            <span>
              <BsCreditCard fontSize={20} />
            </span>
            Card
          </button>
          <button onClick={handlePaypal} className="d-flex gap-1 button">
            <span>
              <BsPaypal fontSize={20} />
            </span>
            Paypal
          </button>
          <button onClick={handleDelivery} className="d-flex gap-1 button">
            <span>
              <CiDeliveryTruck fontSize={20} />
            </span>
            Delivery
          </button>
        </div>
        <div>
          {card && (
            <Payment
              checkOutToken={checkOutToken}
              shippingData={shippingData}
              nextStep={nextStep}
              refreshCart={refreshCart}
            />
          )}
          {payPal && (
            <PayPalpayment
              checkOutToken={checkOutToken}
              shippingData={shippingData}
              nextStep={nextStep}
              refreshCart={refreshCart}
            />
          )}
          {delivery && (
            <p className="text-center mt-5 fw-bold h3">Payment On Pickup</p>
          )}
        </div>
        <FormCom
          checkOutToken={checkOutToken}
          backStep={backStep}
          shippingData={shippingData}
          nextStep={nextStep}
          refreshCart={refreshCart}
          delivery={delivery}
        />
      </ScrollTop>
    </React.Fragment>
  );
};

export default PaymentForm;
