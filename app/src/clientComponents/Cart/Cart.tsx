"use client";
import { CircleIcon, PressFiller } from "@/components";
import { memo, useCallback, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Drawer } from "@mui/material";
import { FaTimes } from "react-icons/fa";

const Cart = memo(() => {
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

  const updateCartItemsNumber = useCallback(() => {
    if (localStorage.cartCounter == null) {
      localStorage.cartCounter = 0;
      setCartItemsNumber(0);
    } else {
      setCartItemsNumber(Number(localStorage.cartCounter));
    }
  }, [setCartItemsNumber]);

  useEffect(() => {
    setInterval(function () {
      updateCartItemsNumber();
    }, 2000);
  }, [updateCartItemsNumber]);

  const cartItemsText =
    cartItemsNumber > 99 ? "+99" : cartItemsNumber.toString();

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

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
            //onClose={() => setIsDrawerOpen(false)}
            anchor="right"
          >
            <EmptyDrawer setIsDrawerOpen={setIsDrawerOpen} />
          </Drawer>
        </div>
        <FaCartShopping size={30} />
      </div>
      <p className="text-[20px] font-extrabold">Cart</p>
    </div>
  );
});

const EmptyDrawer = memo(
  ({ setIsDrawerOpen }: { setIsDrawerOpen: (a: boolean) => void }) => {
    return (
      <div
        className="w-[500px]"
        style={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          padding: 15,
          gap: 20,
        }}
      >
        <div className="self-end" style={{ alignSelf: "flex-end" }}>
          <CircleIcon
            Icon={FaTimes}
            size={50}
            bgColor="transparent"
            iconColor="gray"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
        <div
          className="text-center"
          style={{ fontSize: 20, fontWeight: "bold", color: "purple" }}
        >
          My cart
        </div>
        <div style={{ fontSize: 14, fontWeight: "600", color: "black" }}>
          Cart Summary
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "black",
            textAlign: "center",
          }}
        >
          You have no items yet..
        </div>
      </div>
    );
  }
);

EmptyDrawer.displayName = "EmptyDrawer";

Cart.displayName = "Cart";

export default Cart;
