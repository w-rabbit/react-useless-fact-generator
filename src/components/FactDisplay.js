import "./FactDisplay.css";

function FactDisplay(props) {
  let uselessFact = "Flamingos can only eat with their heads upside down.";
  return (
    <div className="fact-display">
      <p>{props.fact}</p>
    </div>
  );
}

export default FactDisplay;
