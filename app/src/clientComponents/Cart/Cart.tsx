"use client";
import { PressFiller } from "@/components";
import { memo, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Drawer } from "@mui/material";

const Cart = memo(() => {
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

  useEffect(() => {
    setCartItemsNumber(localStorage.cartCounter);

    setInterval(function () {
      setCartItemsNumber(localStorage.cartCounter);
    }, 3000);
  }, []);

  const cartItemsText =
    Number(cartItemsNumber) > 99 ? "+99" : cartItemsNumber.toString();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-row items-center gap-4 overflow-hidden relative">
      <PressFiller
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      />
      <div className="relative m-2" style={{ margin: 8 }}>
        <div
          className="absolute right-[-7px] top-[-7px] z-10 rounded-full w-4 h-4 justify-center items-center"
          style={{
            backgroundColor: "yellow",
            right: -7,
            top: -7,
            width: 16,
            height: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            className="text-[11px] text-center font-bold"
            style={{ fontSize: 9 }}
          >
            {cartItemsText}
          </p>
        </div>
        <div className="absolute">
          <Drawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            anchor="right"
          >
            <p>Hey</p>
          </Drawer>
        </div>
        <FaCartShopping size={30} />
      </div>
      <p className="text-[20px] font-extrabold">Cart</p>
    </div>
  );
});

/*


          <div
            className="absolute right-[-7px] top-[-7px] z-10 rounded-full w-[16px] h-[16px] justify-center items-center"
            style={{ backgroundColor: "yellow", padding: 2 }}
          >
            <p className="text-[11px] text-center font-bold">{cartItemsText}</p>
          </div>

  return (
    <div className="flex flex-row items-center gap-3">
      <PressFiller
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      />
      <div className="relative">
        <div
          className="absolute right-[-7px] top-[-7px] z-10 rounded-full w-4 h-4 justify-center items-center"
          style={{ backgroundColor: "yellow" }}
        >
          <p className="text-[11px] text-center font-bold">{cartItemsText}</p>
        </div>
        <div className="absolute">
          <Drawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            anchor="right"
          >
            <p>Hey</p>
          </Drawer>
        </div>
        <FaCartShopping size={30} />
      </div>
      <p className="text-[20px] font-extrabold">Cart</p>
    </div>
  );

*/

Cart.displayName = "Cart";

export default Cart;
