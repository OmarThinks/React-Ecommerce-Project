import { CircleIcon } from "@/components";
import { memo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityCounter = memo(() => {
  return (
    <div
      className="w-[150px] flex flex-row justify-between p-1 rounded-full items-center"
      style={{ backgroundColor: "#eee" }}
    >
      <CircleIcon Icon={FaMinus} size={20} bgColor="yellow" iconColor="black" />
      <p className="text-[13px] font-bold" style={{ color: "purple" }}>
        1
      </p>
      <CircleIcon Icon={FaPlus} size={20} bgColor="yellow" iconColor="black" />
    </div>
  );
});

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
