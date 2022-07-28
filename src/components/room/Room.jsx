import { useState } from "react";
import Hotel from "../../data/Hotel";
import "./room.css";

const randRoom = Hotel.sort(() => Math.random() - Math.random()).slice(0, 3);

const Room = () => {
  return (
    <div className="featuredRooms">
      <div className="roomItem">
        <img
          src={`${randRoom[0].image}`}
          alt="Featured Room"
          className="roomImg"
        />
        <div className="title">
          <h2>{`${randRoom[0].RoomType}`}</h2>
          <h3>{`${randRoom[0].status}`}</h3>
        </div>
        <div className="btnContainer">
          <button className="bookBtn">Book now</button>
        </div>
      </div>
      <div className="roomItem">
        <img
          src={`${randRoom[1].image}`}
          alt="Featured Room"
          className="roomImg"
        />
        <div className="title">
          <h2>{`${randRoom[1].RoomType}`}</h2>
          <h3>{`${randRoom[1].status}`}</h3>
        </div>
        <div className="btnContainer">
          <button className="bookBtn">Book now</button>
        </div>
      </div>
      <div className="roomItem">
        <img
          src={`${randRoom[2].image}`}
          alt="Featured Room"
          className="roomImg"
        />
        <div className="title">
          <h2>{`${randRoom[2].RoomType}`}</h2>
          <h3>{`${randRoom[2].status}`}</h3>
        </div>
        <div className="btnContainer">
          <button className="bookBtn">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
