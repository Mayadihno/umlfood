import { List, Typography, ListItem, ListItemText } from "@mui/material";
import React from "react";
// import { UserContext } from "../../Context/UserPersonal";
import ScrollTop from "../ScrolTop/ScrollTop";

const Review = ({ checkOutToken }) => {
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
      <ScrollTop>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <List disablePadding>
          {checkOutToken.line_items.map((product) => (
            <ListItem style={{ padding: "10px 0px" }} key={product.name}>
              <ListItemText
                primary={product.name}
                secondary={`Quantity ${product.quantity}`}
              />
              <Typography variant="body2">
                {"Kr" +
                  parseInt(
                    product.line_total.formatted_with_symbol.slice(2) * 10
                  ) +
                  ".00"}
              </Typography>
            </ListItem>
          ))}
          <ListItem style={{ padding: "10px 0px" }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
              {checkOutToken.subtotal.formatted_with_symbol}
            </Typography>
          </ListItem>
        </List>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Review;
