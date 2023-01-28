import { useState } from "react";
export const useCountNumber = (initiailVal = 0) => {
  const [count, setCount] = useState(initiailVal);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, reset, decrease, increase];
};
