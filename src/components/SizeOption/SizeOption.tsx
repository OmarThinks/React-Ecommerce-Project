import React, { memo } from "react";
import colors from "@/theme/colors.module.scss";

const SizeOption = memo(
  ({ text, isChosen }: { text: string; isChosen: boolean }) => {
    const textColor = isChosen ? colors.normalText : colors.primaryColor;
    const bgColor = isChosen ? colors.lightGray : colors.appBg;

    return (
      <div
        className="w-12 h-12 rounded-full items-center content-center flex justify-center border-[1px]"
        style={{ backgroundColor: bgColor, borderColor: colors.lightGray }}
      >
        <p
          className="text-[9px] font-semibold self-center text-center"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    );
  }
);

SizeOption.displayName = "SizeOption";

export default SizeOption;
