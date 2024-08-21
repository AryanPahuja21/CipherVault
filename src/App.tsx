import GenerateMnemonic from "./screens/GenerateMnemonic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <div className="h-full bg-[#111111] text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateMnemonic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
