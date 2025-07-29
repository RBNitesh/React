import React, { useState } from "react";

function MouseEvents() {
  const [events, setEvents] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const addEvent = (eventName) => {
    setEvents((prev) => [
      ...prev,
      `${eventName} - ${new Date().toLocaleTimeString()}`,
    ]);
  };

  const clearEvents = () => {
    setEvents([]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
        React Mouse Events Demo
      </h1>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {/* Interactive Area */}
        <div
          style={{
            border: "2px solid #333",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#1a1a1a",
            minHeight: "400px",
          }}
        >
          <h3 style={{ color: "white", marginBottom: "20px" }}>
            Interactive Area
          </h3>

          {/* Click Events */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#4CAF50" }}>Click Events:</h4>
            <button
              style={{
                margin: "5px",
                padding: "10px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => addEvent("onClick")}
              onDoubleClick={() => addEvent("onDoubleClick")}
              onContextMenu={(e) => {
                e.preventDefault();
                addEvent("onContextMenu (Right Click)");
              }}
            >
              Click & Right-Click Me
            </button>
          </div>

          {/* Mouse Down/Up Events */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#2196F3" }}>Mouse Press Events:</h4>
            <button
              style={{
                margin: "5px",
                padding: "10px 15px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onMouseDown={() => addEvent("onMouseDown")}
              onMouseUp={() => addEvent("onMouseUp")}
            >
              Press & Release
            </button>
          </div>

          {/* Hover Events */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#FF9800" }}>Hover Events:</h4>
            <div
              style={{
                padding: "15px",
                backgroundColor: isHovered ? "#FF9800" : "#333",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => {
                setIsHovered(true);
                addEvent("onMouseEnter");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                addEvent("onMouseLeave");
              }}
              onMouseOver={() => addEvent("onMouseOver")}
              onMouseOut={() => addEvent("onMouseOut")}
            >
              Hover over me
            </div>
          </div>

          {/* Mouse Move Event */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#9C27B0" }}>Mouse Movement:</h4>
            <div
              style={{
                padding: "15px",
                backgroundColor: "#333",
                color: "white",
                borderRadius: "5px",
                border: "1px solid #9C27B0",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setMousePosition({ x: Math.round(x), y: Math.round(y) });
              }}
            >
              Move mouse here: ({mousePosition.x}, {mousePosition.y})
            </div>
          </div>

          {/* Drag Events */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#E91E63" }}>Drag Events:</h4>
            <div
              style={{
                padding: "15px",
                backgroundColor: "#333",
                color: "white",
                borderRadius: "5px",
                cursor: "grab",
                userSelect: "none",
              }}
              onMouseDown={() => addEvent("onMouseDown (Drag Start)")}
              onMouseUp={() => addEvent("onMouseUp (Drag End)")}
            >
              Try to drag me
            </div>
          </div>
        </div>

        {/* Events Log */}
        <div
          style={{
            border: "2px solid #333",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#1a1a1a",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ color: "white", margin: 0 }}>Events Log</h3>
            <button
              onClick={clearEvents}
              style={{
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>

          <div
            style={{
              height: "350px",
              overflowY: "auto",
              backgroundColor: "#000",
              padding: "10px",
              borderRadius: "5px",
              fontFamily: "monospace",
              fontSize: "12px",
            }}
          >
            {events.length === 0 ? (
              <p
                style={{
                  color: "#666",
                  textAlign: "center",
                  marginTop: "150px",
                }}
              >
                No events yet. Try interacting with the elements on the left!
              </p>
            ) : (
              events.map((event, index) => (
                <div
                  key={index}
                  style={{ color: "#4CAF50", marginBottom: "5px" }}
                >
                  {event}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Event Descriptions */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#1a1a1a",
          borderRadius: "10px",
          border: "2px solid #333",
        }}
      >
        <h3 style={{ color: "white", marginBottom: "20px" }}>
          Mouse Event Descriptions
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
          }}
        >
          <div>
            <h4 style={{ color: "#4CAF50" }}>Click Events</h4>
            <ul style={{ color: "#ccc", fontSize: "14px" }}>
              <li>
                <strong>onClick:</strong> Fires when element is clicked
              </li>
              <li>
                <strong>onDoubleClick:</strong> Fires when element is
                double-clicked
              </li>
              <li>
                <strong>onContextMenu:</strong> Fires on right-click (context
                menu)
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#2196F3" }}>Press Events</h4>
            <ul style={{ color: "#ccc", fontSize: "14px" }}>
              <li>
                <strong>onMouseDown:</strong> Fires when mouse button is pressed
                down
              </li>
              <li>
                <strong>onMouseUp:</strong> Fires when mouse button is released
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#FF9800" }}>Hover Events</h4>
            <ul style={{ color: "#ccc", fontSize: "14px" }}>
              <li>
                <strong>onMouseEnter:</strong> Fires when mouse enters element
              </li>
              <li>
                <strong>onMouseLeave:</strong> Fires when mouse leaves element
              </li>
              <li>
                <strong>onMouseOver:</strong> Fires when mouse moves over
                element
              </li>
              <li>
                <strong>onMouseOut:</strong> Fires when mouse moves out of
                element
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#9C27B0" }}>Movement Events</h4>
            <ul style={{ color: "#ccc", fontSize: "14px" }}>
              <li>
                <strong>onMouseMove:</strong> Fires when mouse moves within
                element
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#333",
            borderRadius: "5px",
          }}
        >
          <h4 style={{ color: "#E91E63" }}>Key Differences:</h4>
          <ul style={{ color: "#ccc", fontSize: "14px" }}>
            <li>
              <strong>onMouseEnter/onMouseLeave:</strong> Don't bubble up to
              parent elements
            </li>
            <li>
              <strong>onMouseOver/onMouseOut:</strong> Do bubble up to parent
              elements
            </li>
            <li>
              <strong>onClick:</strong> Combines onMouseDown + onMouseUp on the
              same element
            </li>
            <li>
              <strong>onContextMenu:</strong> Usually needs preventDefault() to
              customize behavior
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MouseEvents;
