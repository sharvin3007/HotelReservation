import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faCalendar,
  faHandsHolding,
  faHomeAlt,
  faHouse
} from '@fortawesome/free-solid-svg-icons'
import './header.css'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useState, React } from 'react'
import { DateRange } from 'react-date-range'
import moment from 'moment'
import Dropdown from '../dropdown/Dropdown'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  // Keeping the date range picker closed when window loads
  const [openDate, setOpenDate] = useState(false)

  // Setting states for start and end dates
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 1),
      key: 'selection'
    }
  ])

  // Formatting date as per required string
  const formatStartDate = moment(date[0].startDate).format('MM/DD/YYYY')
  const formatEndDate = moment(date[0].endDate).format('MM/DD/YYYY')

  // Setting states for room ccupancy to be false (closed) when window opens
  const [openPeople, setopenPeople] = useState(false)

  // Set initial count
  const [roomCount, setRoomCount] = useState(1)
  // const [peopleCount, setPeopleCount] = useState(1);

  const increaseRoomCount = () => {
    if (roomCount < 10) {
      setRoomCount(roomCount + 1)
    }
  }

  const decreaseRoomCount = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1)
    }
  }

  const [roomType, setRoomType] = useState('')

  const handleRoomTypeCallback = (typeData) => {
    setRoomType(typeData)
  }

  // Function to create object of room data on search
  const onTriggerTrx = () => {
    const childObj = {
      roomTotal: roomCount,
      startDate: formatStartDate,
      endDate: formatEndDate,
      roomSort: roomType
    }
    props.parentCallback(childObj)
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <NavLink activeclassname="active" to="/" className="headerItems">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </NavLink>
          <NavLink activeclassname="active" to="/rooms" className="headerItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
          </NavLink>
          <NavLink activeclassname="active" to="/about" className="headerItems">
            <FontAwesomeIcon icon={faHandsHolding} />
            <span>About Us</span>
          </NavLink>
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
            <Dropdown typeCallback={handleRoomTypeCallback} />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="searchIcon" />
            <span
              onClick={() => {
                setOpenDate(!openDate)
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
            <FontAwesomeIcon icon={faHomeAlt} className="searchIcon" />
            <span
              onClick={() => {
                setopenPeople(!openPeople)
              }}
              className="headerSearchText"
            >
              {`${roomCount} rooms`}
            </span>
            {openPeople && (
              <div className="occupancyOptions">
                <div className="occupancyItem">
                  <span className="occupancyText">Room</span>
                  <div className="counterContainer">
                    <button
                      className="counter"
                      disabled={roomCount < 1}
                      onClick={decreaseRoomCount}
                    >
                      -
                    </button>
                    <span className="count">{`${roomCount}`}</span>
                    <button
                      className="counter"
                      disabled={roomCount > 3}
                      onClick={increaseRoomCount}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="searchBtn" onClick={onTriggerTrx}>
              Search rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
