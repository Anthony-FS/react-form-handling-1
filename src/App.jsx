import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [newGreeting, setNewGreeting] = useState("");

  const handleInputChange = (event) => {
    setNewGreeting(event.target.value);
  };

  const handleUpdateGreeting = () => {
    setGreeting(newGreeting);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={newGreeting} onChange={handleInputChange} />
      </div>

      <div className="buttons">
        <button onClick={handleUpdateGreeting}>Update text</button>
      </div>
    </div>
  );
}

export default App;
