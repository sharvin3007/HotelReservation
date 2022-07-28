import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="roomContainer">
        <Room />
      </div>
    </div>
  );
};

export default Home;
