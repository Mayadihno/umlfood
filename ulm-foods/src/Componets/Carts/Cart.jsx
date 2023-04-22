import React from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import "../Carts/Style.css";

const Cart = ({ cart, handleUpdateQty, handleRemoveCart, handleEmptyCart }) => {
  if (!cart.line_items) return "Loading...";
  return (
    <React.Fragment>
      <div className="container mt-5 py-4 cart">
        <h3 className="text-center">Your Shopping Carts</h3>
        {!cart.line_items.length ? (
          <EmptyCart />
        ) : (
          <FilledCart
            cart={cart}
            handleUpdateQty={handleUpdateQty}
            handleRemoveCart={handleRemoveCart}
            handleEmptyCart={handleEmptyCart}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
