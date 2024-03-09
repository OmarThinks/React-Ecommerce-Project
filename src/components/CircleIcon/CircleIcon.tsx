import { PressFiller } from "@components";
import { memo } from "react";
import type { IconType } from "react-icons";

const CircleIcon = memo(
  ({
    Icon,
    size,
    bgColor,
    iconColor,
    onClick,
  }: {
    Icon: IconType;
    size: number;
    bgColor: string;
    iconColor: string;
    onClick?: () => void;
  }) => {
    return (
      <div
        className="rounded-full overflow-hidden flex items-center justify-center relative"
        style={{ width: size, height: size, backgroundColor: bgColor }}
      >
        <PressFiller onClick={onClick} />
        <Icon size={size / 2} color={iconColor} />
      </div>
    );
  }
);

CircleIcon.displayName = "CircleIcon";

export default CircleIcon;
