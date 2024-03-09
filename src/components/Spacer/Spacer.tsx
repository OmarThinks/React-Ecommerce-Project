import { memo } from "react";
import colors from "@colors";

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
