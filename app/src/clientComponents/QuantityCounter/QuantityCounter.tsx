"use client";
import { CircleIcon } from "@/components";
import { memo, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityCounter = memo(() => {
  const [counter, setCounter] = useState(1);

  return (
    <div
      className="w-[150px] flex flex-row justify-between p-1 rounded-full items-center"
      style={{ backgroundColor: "#eee" }}
    >
      <CircleIcon
        Icon={FaMinus}
        size={20}
        bgColor="yellow"
        iconColor="black"
        onClick={() => {
          setCounter(counter - 1);
        }}
      />
      <p className="text-[13px] font-bold" style={{ color: "purple" }}>
        {counter}
      </p>
      <CircleIcon
        Icon={FaPlus}
        size={20}
        bgColor="yellow"
        iconColor="black"
        onClick={() => {
          setCounter(counter + 1);
        }}
      />
    </div>
  );
});

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
