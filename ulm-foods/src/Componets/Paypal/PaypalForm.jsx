import React from "react";
import emailjs from "@emailjs/browser";

const PaypalForm = ({ checkOutToken, shippingData, nextStep, accessToken }) => {
  console.log(`AccessToken from paypalForm:${accessToken}`);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygjkvb9",
        "template_ugaedmh",
        e.target,
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
    nextStep();
  };
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
  const items = checkOutToken.line_items;
  const total = checkOutToken.subtotal.formatted_with_symbol;
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="name" defaultValue={lastname} />
        <input type="hidden" name="fname" defaultValue={firstname} />
        <input type="hidden" name="phone" defaultValue={phone} />
        <input type="hidden" name="cname" defaultValue={companyName} />
        <input type="hidden" name="cvr" defaultValue={cvr_nr} />
        <input type="hidden" name="email" defaultValue={email} />
        <input type="hidden" name="address" defaultValue={address} />
        <input type="hidden" name="division" defaultValue={subdivision} />
        <input type="hidden" name="city" defaultValue={city} />
        <input type="hidden" name="zip" defaultValue={zip} />
        <input type="hidden" name="country" defaultValue={country} />
        {items.map((item, index) => {
          return (
            <div key={index}>
              <input
                key={index}
                type="hidden"
                name="pname"
                defaultValue={item.product_name}
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
          defaultValue={checkOutToken.subtotal.formatted_with_symbol}
        />
      </form>
    </React.Fragment>
  );
};

export default PaypalForm;
