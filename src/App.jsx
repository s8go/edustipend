import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Trending from "./components/Trending";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
        <Signup/>
      <div className="container">
      <Create/>
      <Trending/>
      </div>
    </div>
  );
}

export default App;
