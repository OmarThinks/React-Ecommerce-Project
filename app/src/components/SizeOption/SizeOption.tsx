import React, { memo } from "react";

const SizeOption = memo(
  ({ text, isChosen }: { text: string; isChosen: boolean }) => {
    const textColor = isChosen ? "black" : "purple";
    const bgColor = isChosen ? "LightGray" : "transparent";

    return (
      <div
        className="w-12 h-12 rounded-full items-center content-center flex justify-center border-[1px]"
        style={{ backgroundColor: bgColor, borderColor: "LightGray" }}
      >
        <p
          className="text-[7px] font-semibold self-center text-center"
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
