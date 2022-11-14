import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Cryptocurrency from "./components/Cryptocurrency/Cryptocurrency";
import Exchange from "./components/Exchange/Exchange";
import LearnCrypto from "./components/LearnCrypto/LearnCrypto";
import NFT from "./components/NFT/NFT";
import Product from "./components/Products/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/learnCrypto" element={<LearnCrypto />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
