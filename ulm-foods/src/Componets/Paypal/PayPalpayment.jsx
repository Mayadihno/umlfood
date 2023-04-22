import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PayPalpayment = ({
  checkOutToken,
  refreshCart,
  shippingData,
  nextStep,
}) => {
  const totalPrice = checkOutToken?.subtotal.raw;
  const navigate = useNavigate();
  const [first, setfirst] = useState("");

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
    if (first) {
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
    }
  }, [first, templateParams]);

  const phone = shippingData.phone_number;
  const lastname = shippingData.lastname;
  const firstname = shippingData.firstname;
  const companyName = shippingData.company_name;
  const cvr_nr = shippingData.cvr_nr;
  const email = shippingData.email;
  const address = shippingData.address1;
  const country = shippingData.shippingCountry;
  const city = shippingData.city;
  const zip = shippingData.zip;
  const subdivision = shippingData.shippingSubdivision;
  const total = checkOutToken.subtotal.formatted_with_symbol;

  return (
    <React.Fragment>
      <div className="mt-5 d-flex align-items-center justify-content-center">
        <form>
          <input
            type="hidden"
            name="name"
            value={lastname}
            // defaultValue={lastname}
          />
          <input
            type="hidden"
            name="fname"
            // defaultValue={firstname}
            value={firstname}
          />
          <input
            type="hidden"
            name="phone"
            // defaultValue={phone}
            value={phone}
          />
          <input
            type="hidden"
            name="cname"
            // defaultValue={companyName}
            value={companyName}
          />
          <input
            type="hidden"
            name="cvr"
            // defaultValue={cvr_nr}
            value={cvr_nr}
          />
          <input
            type="hidden"
            name="email"
            // defaultValue={email}
            value={email}
          />
          <input
            type="hidden"
            name="address"
            // defaultValue={address}
            value={address}
          />
          <input
            type="hidden"
            name="division"
            // defaultValue={subdivision}
            value={subdivision}
          />
          <input
            type="hidden"
            name="city"
            // defaultValue={city}
            value={city}
          />
          <input
            type="hidden"
            name="zip"
            // defaultValue={zip}
            value={zip}
          />
          <input
            type="hidden"
            name="country"
            // defaultValue={country}
            value={country}
          />
          {items.map((item, index) => {
            return (
              <div key={index}>
                <input
                  key={index}
                  type="hidden"
                  name="pname"
                  value={item.product_name}
                />
                <input
                  key={item.id}
                  type="hidden"
                  name="qname"
                  defaultValue={item.quantity}
                />
              </div>
            );
          })}
          <input
            type="hidden"
            name="total"
            // defaultValue={checkOutToken.subtotal.formatted_with_symbol}
            value={checkOutToken.subtotal.formatted_with_symbol}
          />
        </form>
        <PayPalScriptProvider
          options={{
            "client-id":
              "ARnKU7r_OvI8ulBTZ1J5MvjJ7hrCnCt4YElTrIPAP_arEH7Gx3QotAG9sbPo4OQOPnA6OC1uOjoDHJAg",
            // "ARnKU7r_OvI8ulBTZ1J5MvjJ7hrCnCt4YElTrIPAP_arEH7Gx3QotAG9sbPo4OQOPnA6OC1uOjoDHJAg",
            // "AXJmu85XKPqFUR2_yCn8bccG1IDab6MWCeirlxF-hL9qpvqhaMe4TxBbUcYuErw8vPSeNqoM9s5ZbaVV",
            currency: "DKK",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              const accessToken = data?.facilitatorAccessToken;
              setfirst(accessToken);
              if (data.facilitatorAccessToken) {
                // console.log("paymet is successful");
                // refreshCart();
                // navigate("/home", { replace: true });
              } else {
                console.log("Unsuccessful payment");
              }
              return actions.order.capture().then(function (details) {
                // console.log(actions.order);

                refreshCart();
                navigate("/home", { replace: true });
                toast.success(
                  "You have Successfully make payment " +
                    details.payer.name.given_name
                );
                // alert("Transctions completed" + details.payer.name.given_name);
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </React.Fragment>
  );
};

export default PayPalpayment;
