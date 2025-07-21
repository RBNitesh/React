import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //method to generate password
  const generatePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);

      password += str.charAt(idx);
    }
    //set the generated password
    setPassword(password);
  }, [length, numberAllowed, charAllowed]);

  //useEffect to call generatePassword when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="box">
      <h1>Password generator</h1>
      <div>
        <input
          className="pass-box"
          type="text"
          value={password}
          name="password"
          placeholder="enter password"
          readOnly
        />
        <button className="copy-btn">copy</button>
      </div>
      <div className="innerBox">
        <input
          type="range"
          className="cursor-pointer"
          onChange={(event) => setLength(event.target.value)}
          min={6}
          max={100}
          value={length}
          id="length-range"
        />
        <label htmlFor="length-range">Length: {length}</label>

        <input
          type="checkbox"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          checked={numberAllowed}
          className="number-allowed"
          id="number-allowed"
        />
        <label htmlFor="number-allowed">numbers</label>

        <input
          type="checkbox"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          checked={charAllowed}
          className="char-allowed"
          id="char-allowed"
        />
        <label htmlFor="char-allowed">characters</label>
      </div>
    </div>
  );
}

export default App;
