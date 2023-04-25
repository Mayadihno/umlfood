import React, { useState } from "react";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
// import { UserContext } from "../../Context/UserPersonal";

const FormCom = ({
  backStep,
  checkOutToken,
  shippingData,
  nextStep,
  refreshCart,
  delivery,
}) => {
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

  // const { person } = useContext(UserContext);

  // const func = () => {
  //   const variable = checkOutToken.subtotal.formatted_with_symbol;
  //   const yake = variable.slice(2);
  //   const final = "Kr" + yake * 10 + ".00";

  //   return final;
  // };
  // const func2 = () => {
  //   const variable = checkOutToken.subtotal.formatted_with_symbol;

  //   return variable;
  // };

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
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={backStep}>
            Back
          </Button>
          {delivery && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => refreshCart()}
            >
              Order&nbsp;&nbsp; {checkOutToken.subtotal.formatted_with_symbol}
            </Button>
          )}
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormCom;
