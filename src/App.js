import React,{useState} from 'react';
import './App.css';

function App() {
const [tank,setTank]= useState(0)
const [mpg,setMpg]= useState(0)
const [distance,setDistance]= useState(0)



const onTankChange = ()=>{
  
}
  return (
    <div className="App">
      <input value={tank} onChange={onTankChange} />
   
    </div>
  );
}

export default App;
