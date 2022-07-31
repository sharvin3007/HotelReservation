import moment from "moment";
import { useState, useCallback } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import Hotel from "../../data/Hotel";
import "./home.css";

const Home = () => {
  // Random array of 3 featured objects

  const [booking, setBooking] = useState([
    { Id: "07", RoomType: "Single Room", image: "./Images/single-room-7.jpg", checkin: '07/31/2022', checkout: '08/01/2022' }
  ]);

  const [perRoomBooking, setRoomState] = useState();

  // Fetching data from children (dropdown + header) into parent
  const handleRoomDataCallback = (childData) => {
    setRoomState({
      roomCount: childData.roomTotal,
      checkin: childData.startDate,
      checkout: childData.endDate,
      roomType: childData.roomSort,
    });
  };

  // if room is available for the given data range
  function formatDate(date) {
    return new Date(date);
  }

  function filtered() {
    if (perRoomBooking) {
      if (booking.length === 0) {
        return Hotel.filter((elem) => {
          return elem.RoomType === perRoomBooking.roomType;
        });
      } else if (booking.length >= 1) {
        // Get booked rooms
        const bookedRooms = []
         booking.forEach((room) => {
            if (formatDate(perRoomBooking.checkin) >= formatDate(room.checkin) && formatDate(perRoomBooking.checkin) <= formatDate(room.checkout)) return bookedRooms.push(room.Id);
          });

        // return available rooms that don't belong to bookedRooms array 
        if(bookedRooms) {
          return Hotel.filter((room) => {
            return !bookedRooms.includes(room.Id) && room.RoomType === perRoomBooking.roomType;
          });
        }
        else return [];
      }
    } else return [];
  }

  return (
    <div>
      <Navbar />
      <Header parentCallback={handleRoomDataCallback} />
      <div className="roomContainer">
        <div className="featuredRooms">
          {filtered().map((roomObj) => (
            <Room dataPacket={roomObj} key={roomObj.Id} />
          ))}
        </div>
        <div className="dataDiv"></div>
      </div>
    </div>
  );
};

export default Home;
