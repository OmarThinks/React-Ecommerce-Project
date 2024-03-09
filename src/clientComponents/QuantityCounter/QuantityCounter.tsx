"use client";
import { CircleIcon } from "@components";
import { memo, useCallback, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import colors from "@colors";

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
      style={{ backgroundColor: "#eee", width: 150, padding: 4 }}
    >
      <CircleIcon
        Icon={FaMinus}
        size={20}
        bgColor={colors.secondaryColor}
        iconColor={colors.onSecondary}
        onClick={decrement}
      />
      <p
        className="text-[13px] font-bold"
        style={{ color: colors.primaryColor }}
      >
        {counter}
      </p>
      <CircleIcon
        Icon={FaPlus}
        size={20}
        bgColor={colors.secondaryColor}
        iconColor={colors.onSecondary}
        onClick={increment}
      />
    </div>
  );
});

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
