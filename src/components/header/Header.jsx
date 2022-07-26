import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHandsHolding,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faHouse} />
            <span>Hotels</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faHandsHolding} />
            <span>About Us</span>
          </div>
        </div>
        <h1 className="headingTitle">Discover our latest discounts exclusively for a limited time!</h1>
        <p className="headingSubtitle">Search low prices on rooms and much more...</p>
        <button className="headerBtn">Find out more</button>
      </div>
    </div>
  );
};

export default Header;
