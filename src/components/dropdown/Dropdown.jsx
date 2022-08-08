import { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./dropdown.css";

// Function to create object of room data on search

const options = ["Single Room", "Double Room"];
const defaultValue = options[0];

const Dropdown = (props) => {
  const [option, setOptions] = useState(defaultValue);

  const handleSelection = (e) => {
    const selectedVal = e.value;
    setOptions(selectedVal);
    props.typeCallback(selectedVal);
  };

  return (
    <ReactDropdown
      className="dropdown"
      options={options}
      value={option.selectedValue}
      placeholder="Select an option"
      onChange={handleSelection}
    />
  );
};

export default Dropdown;
