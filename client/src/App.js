import React from "react";
import { Route, Routes } from "react-router-dom";
import CryptoPage from "./components/Pages/CryptoPage";
import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bbdefb",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
