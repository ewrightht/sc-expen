import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme/theme";
import Routes from "./Routes";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
