import React, { memo } from "react";

const PressFiller = memo(({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      className="w-full h-full absolute z-10"
      onClick={onClick}
      style={{
        zIndex: 10,
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    />
  );
});

PressFiller.displayName = "PressFiller";

export default PressFiller;
