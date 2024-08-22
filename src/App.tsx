import GenerateMnemonic from "./screens/GenerateMnemonic";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Wallet from "./screens/Wallet";

function App() {
  const mnemonic = localStorage.getItem("mnemonic");
  console.log(mnemonic);
  return (
    <div className="h-full bg-[#111111] text-white">
      <BrowserRouter>
        <Routes>
          {mnemonic ? (
            <Route path="/" element={<Wallet />} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generate" element={<GenerateMnemonic />} />
            </Routes>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
