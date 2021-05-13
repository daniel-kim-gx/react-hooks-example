import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { DataPage } from "./pages/DataPage";
import { BehaviorPage } from "./pages/BehaviorPage";
import { ComplexPage } from "./pages/ComplexPage";
import { HomePage } from "./pages/HomePage";
import { OptimizePage } from "./pages/OptimizePage";
import { AsyncPage } from "./pages/AsyncPage";

import "@fontsource/roboto-mono";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";
import { PlaygroundPage } from "./pages/PlaygroundPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <SnackBarContextProvider>
      <>
        <Router>
          <HomePage path="/" />
          <DataPage path="/data/*" />
          <BehaviorPage path="/behavior/*" />
          <ComplexPage path="/complex-data/*" />
          <OptimizePage path="/optimize/*" />
          <AsyncPage path="/async/*" />
          <PlaygroundPage path="/playground" />
          <NotFoundPage default />
        </Router>
        <GlobalStyle />
      </>
    </SnackBarContextProvider>
  );
}

export default App;
