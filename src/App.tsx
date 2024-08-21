import GenerateMnemonic from "./screens/GenerateMnemonic";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generate" element={<GenerateMnemonic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
