import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomeField from "./CustomeField";
import "../Checkout/Checkout.css";
import { commerce } from "../lib/Commerce";
import { Link } from "react-router-dom";

const AddressForm = ({ checkOutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]); //convert the object into array
  };

  const fetchSubdevisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    // console.log(checkOutToken);
    fetchShippingCountries(checkOutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdevisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkOutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const method = useForm();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <FormProvider {...method}>
        <form
          onSubmit={method.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingOption,
              shippingSubdivision,
            })
          )}
        >
          <Grid container spacing={3}>
            <CustomeField name="firstname" label="First Name" required />
            <CustomeField name="lastname" label="Last Name" required />
            <CustomeField name="email" label="Email" required />
            <CustomeField name="phone_number" label="Phone Number" required />
            <CustomeField name="company_name" label="Company Name" />
            <CustomeField name="cvr_nr" label="Cvr Nr" />
            <CustomeField
              name="address1"
              label="Full Shipping Address"
              required
            />
            <CustomeField name="city" label="City" required />
            <CustomeField name="zip" label="Zip / Postal Code" required />

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                fullWidth
                value={shippingCountry}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem value={country.id} key={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping SubDivision</InputLabel>
              <Select
                fullWidth
                value={shippingSubdivision}
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((division) => (
                  <MenuItem value={division.id} key={division.id}>
                    {division.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                fullWidth
                value={shippingOption}
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem value={option.id} key={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <Button variant="outlined" LinkComponent={Link} to="/cart">
              Back to Cart
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default AddressForm;
