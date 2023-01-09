import React, { useState } from "react";
import "./App.css";

function App() {
  const [tank, setTank] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [distance, setDistance] = useState(0);
  const [result, setResult] = useState("");

  const onTankChange = (e) => {
    setTank(e.target.value);
    calculate();
  };
  const onMpgChange = (e) => {
    setMpg(e.target.value);
    calculate();
  };
  const onDistanceChange = (e) => {
    setDistance(e.target.value);
    calculate();
  };
  const calculate = () => {
    const carDistance = tank * mpg;

    if (carDistance >= distance) setResult("We finish");
    else setResult("We do not finish ");
  };
  return (
    <div className="App">
      <fieldset>
        <label htmlFor="tank"> Tank, gal </label>
        <input value={tank} onChange={onTankChange} name="tank" type="number" />
      </fieldset>
      <fieldset>
        <label htmlFor="mpg"> MPG </label>
        <input value={mpg} onChange={onMpgChange} name="mpg" type="number" />
      </fieldset>
      <fieldset>
        <label htmlFor="distance"> Distance </label>
        <input
          value={distance}
          onChange={onDistanceChange}
          name="distance"
          type="number"
        />
      </fieldset>

      <div>
        {tank}
        {mpg}
        {distance}
      </div>

      <hr />
      {result}
    </div>
  );
}

export default App;
