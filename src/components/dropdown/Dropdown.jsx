import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import "./dropdown.css";

const options = [
  'Single Room', 'Double Room'
];

const defaultOption = options[0];

const Dropdown = () => {
  return (
    <ReactDropdown className="dropdown" options={options} value={defaultOption} placeholder="Select an option"/>
  );
};

export default Dropdown;
