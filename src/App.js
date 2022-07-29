import { Routes, Route } from "react-router-dom";
import "./App.css";
import Ghibli from "./components/Ghibli";
import WatchList from "./components/WatchList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Ghibli />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>
  );
}

export default App;
