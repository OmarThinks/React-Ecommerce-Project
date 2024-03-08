"use client";
import { Button } from "@components";
import { memo } from "react";

const addTocart = () => {
  console.log(localStorage.cartCounter);
  if (localStorage.cartCounter == null || localStorage.cartCounter == "") {
    localStorage.cartCounter = localStorage.productCounter;
  } else {
    localStorage.cartCounter =
      Number(localStorage.cartCounter) + Number(localStorage.productCounter);
  }
};

const AddToCart = memo(() => {
  return (
    <Button
      style={{ flex: 1 }}
      text={"Add To Cart"}
      bgColor="purple"
      textColor="white"
      onClick={addTocart}
    />
  );
});

AddToCart.displayName = "AddToCart";

export default AddToCart;
