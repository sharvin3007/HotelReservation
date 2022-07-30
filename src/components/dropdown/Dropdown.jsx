import { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./dropdown.css";

// Function to create object of room data on search

const Dropdown = (props) => {
  const [option, setOptions] = useState({
    options: ['Single Room', 'Double Room'],
    selectedValue: "",
    defaultValue: 'Single Room'
  });
  
  // console.log(option.selectedValue)

  const handleSelection = (e) => {
    const selectedVal = e.value
    console.log(selectedVal, option)
  }

  return (
    <ReactDropdown
      className="dropdown"
      options={option.options}
      value={option.defaultValue}
      placeholder="Select an option"
      onChange={handleSelection}
    />
  );
};

export default Dropdown;
