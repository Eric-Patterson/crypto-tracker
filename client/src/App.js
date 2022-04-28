import React from "react";
import { Route, Routes } from "react-router-dom";
import CryptoPage from "./components/Pages/CryptoPage";
import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      // main: "#11cb5f",
      main: "#bbdefb",
      darker: "#053e85",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Button>Primary</Button>
      <Button sx={{ color: "red" }}>Secondary</Button> */}
      <Navbar />
      <Routes>
        <Route path="/" theme={theme} element={<CryptoPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
