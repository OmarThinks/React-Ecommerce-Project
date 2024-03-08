import React, { memo } from "react";

const Button = memo(
  ({
    text,
    bgColor,
    textColor,
  }: {
    //style;
    text: string;
    bgColor: string;
    textColor: string;
  }) => {
    return <div>Button</div>;
  }
);

Button.displayName = "Button";

export default Button;
