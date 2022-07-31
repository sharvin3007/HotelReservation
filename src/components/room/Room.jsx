import "./room.css";

const Room = (props) => {

  const onTriggerParent = (event) => {
    props.parentCallback(props.dataPacket.Id)
    event.preventDefault()
  } 

  return (
    <div className="roomItem">
      <img
        src={props.dataPacket.image}
        alt="Featured Room"
        className="roomImg"
      />
      <div className="title">
        <h2>{props.dataPacket.RoomType}</h2>
        {/* <h3>{props.dataPacket.status}</h3> */}
      </div>
      <div className="btnContainer">
        <button onClick={onTriggerParent} className="bookBtn">
          Book now
        </button>
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
