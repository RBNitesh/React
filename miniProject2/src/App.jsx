import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  //method to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // it is not necessary to set selection range for copying to clipboard
    // but if you want to select a specific part of the password, you can uncomment the
    // following line and adjust the range as needed
    // for example, to select the first 10 characters:
    // passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
    console.log("Password copied to clipboard:", password);
  }, [password]);

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
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="copy-btn">
          copy
        </button>
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
