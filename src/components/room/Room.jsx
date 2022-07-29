import "./room.css";
import {Link} from "react-router-dom";

const Room = (props) => {
  // Defining props
  return (
    <div className="roomItem">
      <img
        src={props.dataPacket.image}
        alt="Featured Room"
        className="roomImg"
      />
      <div className="title">
        <h2>{props.dataPacket.RoomType}</h2>
        <h3>{props.dataPacket.status}</h3>
      </div>
      <div className="btnContainer">
        <Link to="/rooms" className="bookBtn">Book now</Link>
      </div>
    </div>
  );
};

// Giving default props
Room.defaultProps = {
  roomType: "Single Room",
  status: "Available",
  image: "./Images/single-room-1.jpeg",
};
export default Room;
