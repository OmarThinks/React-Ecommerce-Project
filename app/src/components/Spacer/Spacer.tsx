import { memo } from "react";
import colors from "@/theme/colors.module.scss";

const Spacer = memo(() => {
  return (
    <div
      className="self-stretch h-[1px]"
      style={{ backgroundColor: colors.lightGray }}
    />
  );
});

Spacer.displayName = "Spacer";

export default Spacer;
