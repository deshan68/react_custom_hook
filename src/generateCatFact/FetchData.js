import Axios from "axios";
import { useEffect, useState } from "react";

export default function FetchData() {
  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  //   const [category, setcategory] = useState("");
  const [excuse, setSetExcuse] = useState("");

  const generateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    generateCatFact();
  }, []);

  const preditAgeHandler = (name) => {
    Axios.get(`https://api.agify.io./?name=${name}`).then((res) => {
      setAge(res.data.age);
    });
  };

  const excuseHandler = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then(
      (res) => {
        setSetExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <button onClick={generateCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => preditAgeHandler(name)}>Predict Age</button>
      <p>Predicted Age is : {age}</p>
      <button onClick={() => excuseHandler("party")}>Party</button>
      <button onClick={() => excuseHandler("family")}>Family</button>
      <button onClick={() => excuseHandler("office")}>Office</button>
      <p>Excuse is: {excuse}</p>
    </div>
  );
}
