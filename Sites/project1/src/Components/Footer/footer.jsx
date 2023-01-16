import EksterneLinks from "./parts/eksterne-links";
import Ressourcer from "./parts/ressourcer";

const Footer = () => {
  return (
    <div className="footer">
      <div className="parent">
        <EksterneLinks />
        <Ressourcer />
        <div className="div3">
          <img src={require("./img/Partner-UNDP-Full.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
