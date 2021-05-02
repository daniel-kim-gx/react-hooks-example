import "./App.css";
import { Router } from "@reach/router";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { ComplexComponent } from "./components/ComplexComponent";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <UseStateComponent path="/data" />
        <UseEffectComponent path="/behavior" />
        <ComplexComponent path="/complex" />
      </Router>
    </div>
  );
}

export default App;
