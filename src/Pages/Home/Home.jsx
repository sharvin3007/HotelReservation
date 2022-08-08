import { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import Hotel from "../../data/Hotel";
import "./home.css";

const Home = () => {
  // Random array of 3 featured objects

  const [booking, setBooking] = useState([]);

  const [perRoomBooking, setRoomState] = useState();

  // Callback to fetch ID data from Room child
  const idCallback = (idData) => {
    if (idData && perRoomBooking) {
      const bookedRoom = {
        Id: idData.Id,
        RoomType: perRoomBooking.roomType,
        checkin: perRoomBooking.checkin,
        checkout: perRoomBooking.checkout,
      };
      setBooking((booking) => [...booking, bookedRoom]);
    }
  };

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

  // Filtering based on data received by user
  function filtered() {
    console.log("booking", booking);
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
          ) {
            bookedRooms.push(room.Id);
          }
        });
        // return available rooms that don't belong to bookedRooms array
        if (bookedRooms) {
          console.log("bookedRooms exist", bookedRooms);
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

  // Get booked rooms array
  function bookedRooms() {
    if (perRoomBooking) {
      if (booking.length >= 1) {
        // Get booked rooms
        const bookedRooms = [];
        booking.forEach((room) => {
          if (
            formatDate(perRoomBooking.checkin) >= formatDate(room.checkin) &&
            formatDate(perRoomBooking.checkin) <= formatDate(room.checkout)
          ) {
            bookedRooms.push(room.Id);
          }
        });
        // return available rooms that don't belong to bookedRooms array
        if (bookedRooms) {
          console.log("bookedRooms exist", bookedRooms);
          return Hotel.filter((room) => {
            return (
              bookedRooms.includes(room.Id) &&
              room.RoomType === perRoomBooking.roomType
            );
          });
        } else return [];
      } else return [];
    } else return [];
  }

  return (
    <div>
      <Navbar />
      <Header parentCallback={handleRoomDataCallback} />
      <div className="roomContainer">
        <div className="featuredRooms">
          <h1 className="availHead">Available Rooms</h1>
          {filtered().map((roomObj) => (
            <Room
              parentCallback={idCallback}
              dataPacket={roomObj}
              key={roomObj.Id}
            />
          ))}
        </div>
        <div className="featuredRooms">
          <h1 className="availHead">Booked Rooms</h1>
          {bookedRooms().map((roomObj) => (
            <Room dataPacket={roomObj} key={roomObj.Id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
