import React, { useState } from "react";
import "./App.css";

function App() {
  const [tank, setTank] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [distance, setDistance] = useState(0);

  const onTankChange = (e) => {
    setTank(e.target.value);
  };
  const onMpgChange = (e) => {
    setMpg(e.target.value);
  };
  const onDistanceChange = (e) => {
    setDistance(e.target.value);
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
        <input value={distance} onChange={onDistanceChange} name="distance" type="number" />
      </fieldset>
      <button>Calculate</button>
    </div>
  );
}

export default App;
