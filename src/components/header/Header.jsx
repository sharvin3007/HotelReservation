import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faHandsHolding,
  faHouse,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";

const Header = () => {
  // Keeping the date range picker closed when window loads
  const [openDate, setOpenDate] = useState(false);

  // Setting states for start and end dates
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Formatting date as per required string
  const formatStartDate = moment(date[0].startDate).format("MMM Do YY");
  const formatEndDate = moment(date[0].endDate).format("MMM Do YY");

  // Setting states for room ccupancy to be false (closed) when window opens
  const [openPeople, setopenPeople] = useState(false);

  // Setting states for room ccupancy
  const [people, setPeople] = useState({
    adult: 1,
    rooms: 1,
  });

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faHouse} />
            <span>Hotels</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faHandsHolding} />
            <span>About Us</span>
          </div>
        </div>
        <h1 className="headingTitle">
          Discover our latest discounts exclusively for a limited time!
        </h1>
        <p className="headingSubtitle">
          Search low prices on rooms and much more...
        </p>
        <button className="headerBtn">Find out more</button>
        <div className="headerSearchBar">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="searchIcon" />
            <input
              type="text"
              placeholder="What stays are you looking for?"
              className="searchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="searchIcon" />
            <span
              onClick={() => {
                setOpenDate(!openDate);
              }}
              className="headerSearchText"
            >{`${formatStartDate} to ${formatEndDate}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="searchIcon" />
            <span onClick={()=> {setopenPeople(!openPeople)}} className="headerSearchText">
              {`${people.adult} adult . ${people.rooms} rooms`}
              <div className="occupancyOptions">
                <div className="occupancyItem">
                  <span className="occupancyText">Adult</span>
                  <div className="counterContainer">
                    <button className="counter">-</button>
                    <span className="count">1</span>
                    <button className="counter">+</button>
                  </div>
                </div>
                <div className="occupancyItem">
                  <span className="occupancyText">Room</span>
                  <div className="counterContainer">
                    <button className="counter">-</button>
                    <span className="count">1</span>
                    <button className="counter">+</button>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="headerSearchItem">
            <button className="searchBtn">
              Search <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
