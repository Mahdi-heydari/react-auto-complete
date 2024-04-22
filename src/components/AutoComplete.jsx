/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../AutoComplete.css";

const AutoComplete = ({ options, onChange }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setShowOptions(true);
    // setSelected("")
  };

  const handleIconClick = () => {
    setShowOptions((prevState) => !prevState);
    setQuery("");
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    if(onChange) onChange(option)
    setShowOptions(false);
    setQuery("");
  };

  let showingOptions = options;
  if (query) {
    showingOptions = options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  }
  return (
    <div className="autocomplete-container">
      <div className="input-container">
        <input
          type="text"
          value={query || selected}
          onChange={handleInputChange}
          placeholder="Type to search..."
        />
        <FontAwesomeIcon
          icon={showOptions ? faAngleUp : faAngleDown}
          className="icon"
          onClick={handleIconClick}
        />
      </div>
      {showOptions && (
        <ul className="autocomplete-options">
          {showingOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option === selected && <FontAwesomeIcon icon={faCheck} className="check"  />}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
