import HomePage from "@pages/Home";
import WalletsPage from "@pages/Wallets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallets" element={<WalletsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
