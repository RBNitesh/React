import "./App.css";
import "tailwindcss";
function App() {
  function handleClick(event) {
    const btn = event.target;
    // const color = btn.innerText.toLowerCase();
    const color = btn.style.background;
    document.body.style.background = color;
    console.log(`Backgrounnd color changed to ${color}`);
  }

  return (
    <div>
      <button
        className="btn"
        style={{ background: "red" }}
        onClick={handleClick}
      >
        Red
      </button>
      <button
        className="btn"
        style={{ background: "blue" }}
        onClick={handleClick}
      >
        Blue
      </button>
      <button
        className="btn"
        style={{ background: "black" }}
        onClick={handleClick}
      >
        Black
      </button>
      <button
        className="btn"
        style={{ background: "green" }}
        onClick={handleClick}
      >
        Green
      </button>
      <button
        className="btn"
        style={{ background: "gray" }}
        onClick={handleClick}
      >
        Gray
      </button>
      <button
        className="btn"
        style={{ background: "yellow" }}
        onClick={handleClick}
      >
        Yellow
      </button>
    </div>
  );
}

export default App;
