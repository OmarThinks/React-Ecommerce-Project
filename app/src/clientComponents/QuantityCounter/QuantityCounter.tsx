"use client";
import { CircleIcon } from "@/components";
import { memo, useCallback, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityCounter = memo(() => {
  const [counter, setCounter] = useState(1);

  const decrement = useCallback(() => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }, [counter, setCounter]);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);

  useEffect(() => {
    localStorage.setItem("productCounter", counter.toString());
  }, [counter]);

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
        onClick={decrement}
      />
      <p className="text-[13px] font-bold" style={{ color: "purple" }}>
        {counter}
      </p>
      <CircleIcon
        Icon={FaPlus}
        size={20}
        bgColor="yellow"
        iconColor="black"
        onClick={increment}
      />
    </div>
  );
});

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
