import "./App.css";
import { Router } from "@reach/router";
import { DataPage } from "./pages/DataPage";
import { BehaviorPage } from "./pages/BehaviorPage";
import { ComplexPage } from "./pages/ComplexPage";
import { HomePage } from "./pages/HomePage";
import { OptimizePage } from "./pages/OptimizePage";
import { AsyncPage } from "./pages/AsyncPage";

import { Header } from "./components/Header";
import "@fontsource/roboto-mono";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";

function App() {
  return (
    <SnackBarContextProvider>
      <div className="App">
        <Header />
        <Router>
          <HomePage path="/" />
          <DataPage path="/data/*" />
          <BehaviorPage path="/behavior/*" />
          <ComplexPage path="/complex-data/*" />
          <OptimizePage path="/optimize/*" />
          <AsyncPage path="/async/*" />
        </Router>
      </div>
    </SnackBarContextProvider>
  );
}

export default App;
