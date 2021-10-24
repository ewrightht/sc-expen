import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Zoom } from "react-toastify";

import theme from "../theme/theme";
import Routes from "./Routes";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer
        position="top-right"
        transition={Zoom}
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
