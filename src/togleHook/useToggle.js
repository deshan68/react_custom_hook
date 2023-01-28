import { useState } from "react";

export const useToggle = (initiailVal = false) => {
  const [state, setState] = useState(initiailVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
  //   return {state, toggle};  if we return this as object, we shold it initiate with object key name. we cannot initiate using other name
};
