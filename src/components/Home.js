import React, { useState } from 'react';
import '../components/css/Home.css';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="home-container">
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={handleDropdownClick}>
          Data Scientist Program {isOpen ? '-' : '+'}
        </div>
        {isOpen && (
          <div className="dropdown-options">
            <div
              className={`option ${selectedOption === 'Option 1' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Option 1')}
            >
              Option 1
            </div>
            <div
              className={`option ${selectedOption === 'Option 2' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Option 2')}
            >
              Option 2
            </div>
            <div
              className={`option ${selectedOption === 'Option 3' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Option 3')}
            >
              Option 3
            </div>
          </div>
        )}
      </div>
      <div className="static-data-container">
        <h1>Welcome to the Data Scientist Program</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet bibendum arcu, vel varius sapien tristique
          vel. Nunc eleifend aliquet mauris, ut bibendum mauris feugiat sed. Ut sollicitudin lectus ac diam faucibus,
          vel bibendum turpis iaculis. Etiam euismod felis nec lorem dignissim, vel bibendum dolor dignissim.
        </p>
      </div>
    </div>
  );
}

export default HomePage;