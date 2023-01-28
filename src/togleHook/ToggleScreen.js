import React from "react";
import { useToggle } from "./useToggle";

export default function ToggleScreen() {
  const [isVisible, toggle] = useToggle(true);
  // const {state, toggle} = useToggle(true); if we return object value from our custome hook, we should initiate that hook oroginal object retunr value
  // const {state: isVisible, toggle} = useToggle(true); if we want to initiate with custome name, we can use like this

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <button onClick={() => toggle()}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}
