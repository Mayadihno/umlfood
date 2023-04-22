import { Grid, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const CustomeField = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              name={name}
              label={label}
              required={required}
              fullWidth
            />
          )}
          defaultValue=""
          control={control}
          name={name}
        />
      </Grid>
    </React.Fragment>
  );
};

export default CustomeField;
