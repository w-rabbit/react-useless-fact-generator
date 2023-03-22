import "./App.css";
import Card from "./components/Card";
import FactButton from "./components/FactButton";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [displayFact, setDisplayFact] = useState();
  const [displaySource, setDisplaySource] = useState();

  //initialize page with random fact and source
  useEffect(() => {
    console.log("aolo");
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en").then(
      (response) => {
        response.json().then((data) => {
          if (!displayFact) {
            setDisplayFact(data.text);
          }
          if (!displaySource) {
            setDisplaySource(data.source);
          }
        });
      }
    );
  }, []);

  const fetchFact = () => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en").then(
      (response) => {
        response.json().then((data) => {
          console.log(data);
          setDisplayFact(data.text);
          console.log(displayFact);
        });
      }
    );
  };

  return (
    <div className="app">
      <Card fact={displayFact}> </Card>
      <FactButton onGenerate={fetchFact}></FactButton>
      <Footer source={displaySource}></Footer>
    </div>
  );
}

export default App;
