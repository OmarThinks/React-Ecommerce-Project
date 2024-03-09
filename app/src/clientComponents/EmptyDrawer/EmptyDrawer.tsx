"use client";
import { CircleIcon } from "@/components";
import { memo } from "react";
import { FaTimes } from "react-icons/fa";

const EmptyDrawer = memo(
  ({ setIsDrawerOpen }: { setIsDrawerOpen: (a: boolean) => void }) => {
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
          className="text-[14px] font-semibold text-center"
          style={{
            color: "black",
          }}
        >
          You have no items yet..
        </div>
      </div>
    );
  }
);

EmptyDrawer.displayName = "EmptyDrawer";

export default EmptyDrawer;
