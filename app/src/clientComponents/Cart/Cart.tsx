"use client";
import React, { memo } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Cart = memo(() => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="relative">
        <div
          className="absolute right-[-7px] top-[-7px] z-10 rounded-full w-4 h-4 justify-center items-center"
          style={{ backgroundColor: "yellow" }}
        >
          <p className="text-[11px] text-center font-bold">1</p>
        </div>
        <FaCartShopping size={30} />
      </div>
      <p className="text-[20px] font-extrabold">Cart</p>
    </div>
  );
});

Cart.displayName = "Cart";

export default Cart;