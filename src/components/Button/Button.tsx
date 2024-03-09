import CSS from "csstype";
import { memo } from "react";
import { PressFiller } from "@components";

const Button = memo(
  ({
    style,
    text,
    bgColor,
    textColor,
    onClick,
  }: {
    style: CSS.Properties;
    text: string;
    bgColor: string;
    textColor: string;
    onClick?: () => void;
  }) => {
    return (
      <div
        style={{ ...style, backgroundColor: bgColor }}
        className="h-10 items-center justify-center flex rounded-full relative overflow-hidden"
      >
        <PressFiller onClick={onClick} />

        <p
          className="text-center text-[15px] font-semibold p-0"
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
