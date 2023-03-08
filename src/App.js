import "./App.css";
import Card from "./components/Card";
import FactButton from "./components/FactButton";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [displayFact, setDisplayFact] = useState("");
  const fetchFact = () => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en").then(
      (response) => {
        response.json().then((data) => console.log(data));
      }
    );
  };
  fetchFact();
  return (
    <div className="app">
      <Card> </Card>
      <FactButton></FactButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
