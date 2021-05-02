import "./App.css";
import { Router } from "@reach/router";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { ComplexComponent } from "./components/ComplexComponent";
import { HomeComponent } from "./components/HomeComponent";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomeComponent path="/" />
        <UseStateComponent path="/data" />
        <UseEffectComponent path="/behavior" />
        <ComplexComponent path="/complex" />
      </Router>
    </div>
  );
}

export default App;
