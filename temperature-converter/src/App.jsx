import { useEffect, useState } from "react";

function App() {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("");
  const [ans, setAns] = useState("");
  const [flag, setFlag] = useState(false);

  const handleConvert = () => {
    let res;
 
    setFlag(true);
    if (scale == "c") {
      res = ((temp * 9) / 5 + 32).toFixed(1).replace(".0", "");

      setAns(res);
 
    }

    if (scale == "f") {
      res = (((temp - 32) * 5) / 9).toFixed(1).replace(".0", "");
      setAns(res); 
    }
    if (isNaN(res)) {
      alert("Please Enter a Valid Number");
      setFlag(false);
    }
  };

  useEffect(() => {
    setFlag(false);
  }, [scale, temp]);

  return (
    <div className="App">
      <h1>Tempearture Scale Converter</h1>
      <div className="inpDiv">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Temperature"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />{" "}
        <br />
        <select
          name=""
          id=""
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="">Select temperature scale</option>
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
        </select>
      </div>
      <br />
      <br />
      <div className="btnDiv">
        <button disabled={scale == "f" ? false : true} onClick={handleConvert}>
          Convert to Celsius
        </button>
        <button disabled={scale == "c" ? false : true} onClick={handleConvert}>
          Convert to Fahrenheit
        </button>
      </div>
      {flag && (
        <h2>
          {ans == NaN
            ? "Enter Valid Number"
            : ` ${temp}°${scale !== "c" ? "F" : "C"} is equal to ${ans}°${
                scale == "c" ? "F" : "C"
              }`}
        </h2>
      )}
    </div>
  );
}

export default App;
