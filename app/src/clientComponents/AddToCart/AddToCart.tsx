"use client";
import { Button } from "@components";
import { memo } from "react";

const AddToCart = memo(() => {
  return (
    <Button
      style={{ flex: 1 }}
      text={"Add To Cart"}
      bgColor="purple"
      textColor="white"
    />
  );
});

AddToCart.displayName = "AddToCart";

export default AddToCart;
