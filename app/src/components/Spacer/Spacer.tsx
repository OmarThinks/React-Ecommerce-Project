import { memo } from "react";

const Spacer = memo(() => {
  return (
    <div
      className="self-stretch h-[1px]"
      style={{ backgroundColor: "lightgray" }}
    />
  );
});

Spacer.displayName = "Spacer";

export default Spacer;
