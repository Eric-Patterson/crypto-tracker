import React from "react";
import { Route, Routes } from "react-router-dom";
import CryptoPage from "./components/Pages/CryptoPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
