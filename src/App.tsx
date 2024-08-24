import GenerateMnemonic from "./screens/GenerateMnemonic";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Wallet from "./screens/Wallet";
import FirstWallet from "./screens/FirstWallet";

function App() {
  const mnemonic = localStorage.getItem("mnemonic");
  const wallets = localStorage.getItem("ethWallets");

  return (
    <div className="h-full text-white">
      <BrowserRouter>
        <Routes>
          {mnemonic ? (
            wallets ? (
              <Route path="/" element={<Wallet />} />
            ) : (
              <Route path="/" element={<FirstWallet />} />
            )
          ) : (
            <Route path="/" element={<Home />} />
          )}
          {!mnemonic && (
            <Route path="/generate" element={<GenerateMnemonic />} />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
