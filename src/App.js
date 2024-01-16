import Modulsor from "./Model/Modulsor.js";
import "./App.css";
import MondatKiegeszit from "./MondatKiegeszit.js";
import { useState } from "react";

function App() {
  const modul = new Modulsor();
  const [mondat, setMondat] = useState(modul.tagolas());
  const [Alap, setAlap] = useState(modul.getAlap());
  const [index, setIndex] = useState(2);
  const [helyes, setHelyes] = useState(modul.getHelyes());
  


  function kovi(){
    let valasz = document.getElementById("valasz").value;
    setHelyes(modul.getHelyes())
    if (valasz == helyes) {
      setIndex(index+1);
      setMondat(modul.tagolas())
      modul.setIndex(index)
      setAlap(modul.getAlap())
      
    }
    console.log(modul.getHelyes());
  }
  return (
    <div>
      <header className="App-header">Tanulj Angolul!</header>
      <div className="fodiv">
        <h2> {modul.Cim()}</h2>
        <h4>Gépeld be a megfelelő alakot!</h4>
        <MondatKiegeszit szo={mondat} helyes={Alap}/>
        <button onClick={kovi}>Küldés</button>
      </div>
    </div>
  );
}

export default App;
