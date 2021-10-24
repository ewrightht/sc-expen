import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import theme from "../theme/theme";
import Routes from "./Routes";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
