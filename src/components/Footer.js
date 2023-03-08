import "./Footer.css";
function Footer(props) {
  return (
    <footer className="footer">
      <p>Copyright © Constantin Istrate 2023</p>
      <p>Powered by {props.source}</p>
    </footer>
  );
}
export default Footer;
