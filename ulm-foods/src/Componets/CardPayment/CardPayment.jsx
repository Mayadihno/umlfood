import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./CardElement.css";

const CardPayment = ({ checkOutToken, shippingData, refreshCart }) => {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const element = useElements();

  const items = checkOutToken.line_items;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const templateParams = {
    fname: shippingData.firstname,
    name: shippingData.lastname,
    phone: shippingData.phone_number,
    cname: shippingData.company_name,
    cvr: shippingData.cvr_nr,
    email: shippingData.email,
    address: shippingData.address1,
    country: shippingData.shippingCountry,
    city: shippingData.city,
    zip: shippingData.zip,
    division: shippingData.shippingSubdivision,
    items: checkOutToken.line_items,
    // eslint-disable-next-line no-use-before-define
    qname: items.map((items) => {
      return items?.quantity;
    }),
    pname: items.map((items) => {
      return items?.name;
    }),
    total: checkOutToken.subtotal.formatted_with_symbol,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      element,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsProcessing(false);
  };
  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <React.Fragment>
      <div className="card__payment">
        <h2>Credit/Debit Card Payment</h2>
        <form id="form-card" onSubmit={handleSubmit}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <div className="form-button">
            <button disabled={isProcessing || !stripe || !element}>
              {isProcessing
                ? "Processing ... "
                : ` Pay ${checkOutToken.subtotal.formatted_with_symbol}`}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CardPayment;
