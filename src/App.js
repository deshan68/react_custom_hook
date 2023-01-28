import { useToggle } from "./useToggle";

function App() {
  const [isVisible, toggle] = useToggle(true);
  // const {state, toggle} = useToggle(true); if we return object value from our custome hook, we should initiate that hook oroginal object retunr value
  // const {state: isVisible, toggle} = useToggle(true); if we want to initiate with custome name, we can use like this

  return (
    <div className="App">
      <button onClick={() => toggle()}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
