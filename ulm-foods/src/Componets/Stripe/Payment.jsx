import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_live_51MelhiGA3s2eyDw7rPB3II6t0XQDxLsZLFs4AmkgGcb9zlwSnCn2eAsmQjGmYNUEl75WlNtkFWFvyA8baKHDeB7y00bxTUcWHT"
);
// "pk_test_51MelhiGA3s2eyDw7jIr18uJyBiHkjmgzJcVLaYbuiYm7XZkaFsvQr3eygQaWGpchXSNHFR6XI2lTStpMNSL5obiG00xalO9tnQ"
// "pk_live_51MelhiGA3s2eyDw7rPB3II6t0XQDxLsZLFs4AmkgGcb9zlwSnCn2eAsmQjGmYNUEl75WlNtkFWFvyA8baKHDeB7y00bxTUcWHT"
const Payment = ({ checkOutToken, shippingData, refreshCart }) => {
  const [clientSecret, setClientSecret] = useState("");
  const totalPrices = checkOutToken?.subtotal.raw;

  useEffect(() => {
    //http://localhost:5252
    // Create PaymentIntent as soon as the page loads
    //https://uml-server.onrender.com/create-payment-intent
    fetch("https://uml-server.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: totalPrices }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrices]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <React.Fragment>
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm
              refreshCart={refreshCart}
              shippingData={shippingData}
              checkOutToken={checkOutToken}
            />
          </Elements>
        )}
      </div>
    </React.Fragment>
  );
};

export default Payment;
