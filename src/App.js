import "./App.css";
import { Router } from "@reach/router";
import { DataPage } from "./components/DataPage";
import { BehaviorPage } from "./components/BehaviorPage";
import { ComplexPage } from "./components/ComplexPage";
import { HomeComponent } from "./components/HomeComponent";
import { Header } from "./components/Header";
import "@fontsource/roboto-mono";
import { OptimizePage } from "./components/OptimizePage";
import { AsyncPage } from "./components/AsyncPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomeComponent path="/" />
        <DataPage path="/data/*" />
        <BehaviorPage path="/behavior/*" />
        <ComplexPage path="/complex-data/*" />
        <OptimizePage path="/optimize/*" />
        <AsyncPage path="/async/*" />
      </Router>
    </div>
  );
}

export default App;
