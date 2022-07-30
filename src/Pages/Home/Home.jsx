import { useState, useCallback } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import Hotel from "../../data/Hotel";
import "./home.css";

const Home = () => {
  // Random array of 3 featured objects
  const randRoom = Hotel.sort(() => Math.random() - Math.random()).slice(0, 3);

  // console.log(hotelData)

  const [perRoomBooking, setRoomState] = useState({roomTotal : '', roomType : '', checkin: '', checkout: ''})

  const handleRoomDataCallback = (childData) => {
    setRoomState({roomCount: childData.roomTotal, checkin: childData.startDate, checkout: childData.endDate, roomType: '' })
  }
  
  console.log(perRoomBooking)

  return (
    <div>
      <Navbar />
      <Header parentCallback = {handleRoomDataCallback}/>
      <div className="roomContainer">
        <div className="featuredRooms">
          {randRoom.map((roomObj) => (
            <Room dataPacket={roomObj} key={roomObj.Id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
