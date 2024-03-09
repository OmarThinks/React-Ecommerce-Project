"use client";
import { CircleIcon } from "@components";
import { memo } from "react";
import { FaTimes } from "react-icons/fa";
import colors from "@/theme/colors.module.scss";

const EmptyDrawer = memo(
  ({ setIsDrawerOpen }: { setIsDrawerOpen: (a: boolean) => void }) => {
    return (
      <div
        className="w-[500px] flex flex-col p-[15px] gap-5"
        style={{ backgroundColor: colors.appBg }}
      >
        <div className="self-end">
          <CircleIcon
            Icon={FaTimes}
            size={50}
            bgColor={colors.appBg}
            iconColor={colors.gray}
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
        <div
          className="text-center text-[20px] font-bold"
          style={{ color: colors.primaryColor }}
        >
          My cart
        </div>
        <div
          className="text-[14px] font-semibold"
          style={{ color: colors.normalText }}
        >
          Cart Summary
        </div>
        <div
          className="text-[14px] font-semibold text-center"
          style={{
            color: colors.normalText,
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
