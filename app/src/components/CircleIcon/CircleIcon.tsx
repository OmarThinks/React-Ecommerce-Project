import React, { memo } from "react";
import type { IconType } from "react-icons";

const CircleIcon = memo(
  ({
    Icon,
    size,
    bgColor,
    iconColor,
  }: {
    Icon: IconType;
    size: number;
    bgColor: string;
    iconColor: string;
  }) => {
    return (
      <div
        className="rounded-full overflow-hidden flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor: bgColor }}
      >
        <Icon size={size / 2} color={iconColor} />
      </div>
    );
  }
);

CircleIcon.displayName = "CircleIcon";

export default CircleIcon;
