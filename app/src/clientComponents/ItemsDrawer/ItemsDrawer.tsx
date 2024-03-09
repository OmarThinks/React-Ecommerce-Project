"use client";
import { Button, CircleIcon, PressFiller, ProductImage } from "@/components";
import { memo } from "react";
import { FaTimes } from "react-icons/fa";

const ItemsDrawer = memo(
  ({
    setIsDrawerOpen,
    cartItemsNumber,
    setCartItemsNumber,
  }: {
    setIsDrawerOpen: (a: boolean) => void;
    cartItemsNumber: number;
    setCartItemsNumber: (a: number) => void;
  }) => {
    return (
      <div className="w-[500px] flex flex-col p-[15px] gap-5">
        <div className="self-end">
          <CircleIcon
            Icon={FaTimes}
            size={50}
            bgColor="transparent"
            iconColor="gray"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
        <div
          className="text-center text-[20px] font-bold"
          style={{ color: "purple" }}
        >
          My cart
        </div>
        <div className="text-[14px] font-semibold" style={{ color: "black" }}>
          Cart Summary
        </div>
        <div
          className="text-[18px] font-bold text-center"
          style={{
            color: "black",
          }}
        >
          Total: {cartItemsNumber * 9000} LE
        </div>
        <div
          className="rounded-[18px] border-[1px] p-[10px] self-stretch flex flex-row gap-[15px]"
          style={{
            borderColor: "lightgray",
          }}
        >
          <ProductImage size={100} imageNumnber={0} borderRadius={10} />
          <div className="flex-1 self-stretch flex flex-col gap-[10px]">
            <p className="text-[16px] font-semibold" style={{ color: "black" }}>
              Adidas black t-shirt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p className="text-[14px] font-semibold" style={{ color: "gray" }}>
              Quantity: {cartItemsNumber}
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-1 items-end">
                <p
                  className="text-[16px] font-semibold"
                  style={{ color: "purple" }}
                >
                  9000
                </p>
                <p
                  className="text-[10px] font-normal"
                  style={{ color: "purple" }}
                >
                  LE
                </p>
              </div>
              <div
                className="flex flex-row justify-center items-center rounded-full overflow-hidden relative"
                style={{ backgroundColor: "yellow" }}
              >
                <PressFiller
                  onClick={() => {
                    setCartItemsNumber(0);
                    localStorage.cartCounter = 0;
                  }}
                />
                <p
                  style={{ color: "black" }}
                  className="mx-7 my-3 font-semibold"
                >
                  Remove
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <Button
            style={{ flex: 1 }}
            text={"Review Cart"}
            bgColor="yellow"
            textColor="black"
          />
          <Button
            style={{ flex: 1 }}
            text={"Complete Checkout"}
            bgColor="purple"
            textColor="white"
          />
        </div>
      </div>
    );
  }
);

ItemsDrawer.displayName = "ItemsDrawer";

export default ItemsDrawer;
