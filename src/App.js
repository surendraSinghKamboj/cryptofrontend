import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Cryptocurrency from "./components/Cryptocurrency/Cryptocurrency";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
