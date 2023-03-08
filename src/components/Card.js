import "./Card.css";
import Header from "./Header";
import FactDisplay from "./FactDisplay";

function Card() {
  return (
    <div className="card">
      <div className="inner-items">
        <Header> </Header>
        <FactDisplay></FactDisplay>
      </div>
    </div>
  );
}
export default Card;
