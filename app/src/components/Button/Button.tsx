import React, { memo } from "react";
import CSS from "csstype";

const Button = memo(
  ({
    style,
    text,
    bgColor,
    textColor,
  }: {
    style: CSS.Properties;
    text: string;
    bgColor: string;
    textColor: string;
  }) => {
    return (
      <div
        style={{ ...style, backgroundColor: bgColor }}
        className="h-10 items-center justify-center flex rounded-full"
      >
        <p
          className="text-center text-[15px] font-semibold"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;
