import "./FactButton.css";

function FactButton(props) {
  return (
    <button className="fact-button" onClick={props.onGenerate}>
      Generate another fact
    </button>
  );
}
export default FactButton;
