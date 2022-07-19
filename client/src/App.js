import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Record from "./components/Record";
import Graph from "./pages/Visual/Graph";

function App() {
  // MQ2, DHT, Level
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Record />} />
          <Route path="/visual" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
