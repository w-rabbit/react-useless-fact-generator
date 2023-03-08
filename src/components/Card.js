import "./Card.css";
import Header from "./Header";
import FactDisplay from "./FactDisplay";

function Card(props) {
  return (
    <div className="card">
      <div className="inner-items">
        <Header> </Header>
        <FactDisplay fact={props.fact}></FactDisplay>
      </div>
    </div>
  );
}
export default Card;
