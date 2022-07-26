import { faHamburger, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="siteLogo">LostMiles <FontAwesomeIcon icon={faPlaneDeparture} /></span>
        <div className="navItems">
          <button className="navButton">My Bookings</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
