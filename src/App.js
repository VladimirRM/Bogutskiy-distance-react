import React, { useState } from "react";
import "./App.css";

function App() {
  const [tank, setTank] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [distance, setDistance] = useState(0);

  const onTankChange = (e) => {
    setTank(e.target.value);
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
    </div>
  );
}

export default App;
