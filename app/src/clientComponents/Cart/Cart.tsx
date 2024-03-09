"use client";
import { PressFiller } from "@/components";
import { Drawer } from "@mui/material";
import { Suspense, lazy, memo, useCallback, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const ItemsDrawer = lazy(() => import("../ItemsDrawer/ItemsDrawer"));
const EmptyDrawer = lazy(() => import("../EmptyDrawer/EmptyDrawer"));

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
          style={{ backgroundColor: "yellow" }}
        >
          <p className="text-[9px] text-center font-bold">{cartItemsText}</p>
        </div>
        <div className="absolute">
          <Drawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            anchor="right"
          >
            {cartItemsNumber !== 0 ? (
              <Suspense fallback={<h1>Loading ...</h1>}>
                <ItemsDrawer
                  setIsDrawerOpen={setIsDrawerOpen}
                  cartItemsNumber={cartItemsNumber}
                  setCartItemsNumber={setCartItemsNumber}
                />
              </Suspense>
            ) : (
              <Suspense fallback={<h1>Loading ...</h1>}>
                <EmptyDrawer setIsDrawerOpen={setIsDrawerOpen} />
              </Suspense>
            )}
          </Drawer>
        </div>
        <FaCartShopping size={30} />
      </div>
      <p className="text-[20px] font-extrabold">Cart</p>
    </div>
  );
});

Cart.displayName = "Cart";

export default Cart;
