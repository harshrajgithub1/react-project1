import React, { useState } from 'react';
import "./header.css";
import Home from './pages_router/Home';
import "./App.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (Home) => {
    setSelectedOption(Home);
    setIsOpen(false);
  };

  const options = ['Home', 'Product', 'About'];

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={handleDropdownToggle}>
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((Home) => (
            <li
              key={Home}
              className="dropdown-option"
              onClick={() => handleOptionSelect(Home)}
            >
              {Home}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
