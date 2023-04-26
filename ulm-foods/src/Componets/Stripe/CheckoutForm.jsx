import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  LinkAuthenticationElement,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import "./StripeCss.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function CheckoutForm({
  refreshCart,
  shippingData,
  checkOutToken,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

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

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        receipt_email: email,
      },
      redirect: "if_required",
    });
    if (paymentIntent) {
      if (paymentIntent.id) {
        emailjs
          .send(
            "service_ygjkvb9",
            "template_ugaedmh",
            templateParams,
            "j6SWmhwJJnrgyfx1V"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        navigate("/home");
        refreshCart();
        toast.success("Payment made successfully");
      }
    }
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };
  return (
    <React.Fragment>
      <form id="payment-form" onSubmit={handleSubmit}>
        <LinkAuthenticationElement
          id="link-authentication-element"
          value={email}
          onChange={(e) => setEmail(e.target)}
        />
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <AddressElement
          options={{
            mode: "shipping",
            defaultValues: {
              name: shippingData.firstname + " " + shippingData.lastname,
              address: {
                line1: shippingData.address1,
                city: shippingData.city,
                country: shippingData.shippingCountry,
                postal_code: shippingData.zip,
              },
            },
          }}
        />
        <button
          className="button"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? "Processing..." : "Pay now"}
          </span>
        </button>
      </form>
    </React.Fragment>
  );
}
