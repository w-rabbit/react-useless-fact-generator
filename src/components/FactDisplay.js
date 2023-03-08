import "./FactDisplay.css";

function FactDisplay() {
  let uselessFact = "Flamingos can only eat with their heads upside down.";
  return (
    <div className="fact-display">
      <div>{uselessFact}</div>
    </div>
  );
}

export default FactDisplay;
