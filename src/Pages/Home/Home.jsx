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
    {
      Id: "07",
      RoomType: "Single Room",
      checkin: "08/01/2022",
      checkout: "09/01/2022",
    },
  ]);

  const [perRoomBooking, setRoomState] = useState();

  const [roomId, setroomId] = useState();

  // Callback to fetch ID data from Room child
  const idCallback = (idData) => {
    setroomId(idData);
  };

  // Fetching data from children (dropdown + header) into parent
  const handleRoomDataCallback = (childData) => {
    setRoomState({
      roomCount: childData.roomTotal,
      checkin: childData.startDate,
      checkout: childData.endDate,
      roomType: childData.roomSort
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
        const bookedRooms = [];
        booking.forEach((room) => {
          if (
            formatDate(perRoomBooking.checkin) >= formatDate(room.checkin) &&
            formatDate(perRoomBooking.checkin) <= formatDate(room.checkout)
          )
            // Returning booked room data (ID - checkin - checkout)
            return bookedRooms.push(roomId)
            // return bookedRooms.push({roomId, type: perRoomBooking.roomType, checkin: perRoomBooking.checkin, checkout: perRoomBooking.checkout});
        });

        console.log(bookedRooms)
        // return available rooms that don't belong to bookedRooms array
        if (bookedRooms) {
          return Hotel.filter((room) => {
            return (
              !bookedRooms.includes(room.Id) &&
              room.RoomType === perRoomBooking.roomType
            );
          });
        } else return [];
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
            <Room parentCallback={idCallback} dataPacket={roomObj} key={roomObj.Id} />
          ))}
        </div>
        <div>Selected Room ID: {roomId}</div>
      </div>
    </div>
  );
};

export default Home;
