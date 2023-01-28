import { useCountNumber } from "./useCountNumber";

export default function CountNumberScreen() {
  const [count, reset, decrease, increase] = useCountNumber();
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
      <p>{count}</p>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => reset()} style={{ margin: "10px" }}>
        Reset
      </button>
      <button onClick={() => decrease()}>-</button>
    </div>
  );
}
