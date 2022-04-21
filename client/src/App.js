import React from "react";
import { Route, Routes } from "react-router-dom";
import CryptoPage from "./components/Pages/CryptoPage";
function App() {
  // test
  // here is some more code
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<CryptoPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
