import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import Hotel from "../../data/Hotel";
import "./home.css";

const Home = () => {
  // Random array of 3 featured objects
  const randRoom = Hotel.sort(() => Math.random() - Math.random()).slice(0, 3);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="roomContainer">
        <div className="featuredRooms">
            {randRoom.map((roomObj) => (
              <Room dataPacket={roomObj} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
