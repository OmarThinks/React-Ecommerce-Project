import React, { memo } from "react";

const PressFiller = memo(({ onClick }: { onClick?: () => void }) => {
  return <button className="w-full h-full absolute z-10" onClick={onClick} />;
});

PressFiller.displayName = "PressFiller";

export default PressFiller;
