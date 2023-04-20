import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Single />} />
      </Routes>
    </div>
  );
};

export default App;
