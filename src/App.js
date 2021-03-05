import "./App.css";
import { generateCheckNumber } from "./generateCheckNumber";
import { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [checkNumber, setCheckNumber] = useState("");

  const handleVinChange = (event) => {
    const vin = event.target.value;

    if (!vin.match(/^[A-Z0-9]{17}$/) && vin.length !== 0) {
      setError("Invalid VIN!");
      setCheckNumber("");
    } else {
      if(vin.length > 0) {
        calculateCheckNumber(vin);
        setError("");
      }
    }
  };

  const handleOnBlurVin = (event) => {
    const vin = event.target.value;

    if (!vin.match(/^[A-Z0-9]{17}$/) && vin.length !== 0) {
      setError("Invalid VIN!");
      setCheckNumber("");
    } else {
      setError("");
    }
  };

  const calculateCheckNumber = (vin) => {
    setCheckNumber(generateCheckNumber(vin));
  };

  return (
    <div className="App">
      <p>Generate a random VIN from: <a href="http://randomvin.com/">here</a></p>
      Enter VIN to generate checksum:
      <input
        type="text"
        onChange={handleVinChange}
        pattern="[A-Z0-9]{17}"
        onBlur={handleOnBlurVin}
      />
      <span className="error">{error}</span>
      <br />
      {checkNumber ? <h1>The check number is: {checkNumber}</h1> : ""}
    </div>
  );
}

export default App;
