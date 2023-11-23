import React, { useState } from 'react';
import './style.css'

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to switch between dark and light modes as needed
  };

  return (
    <div className="toggle">
      <span>🌙</span>
      <input
        type="checkbox"
        id="toggle-switch"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-switch">
        <span className="screen-reader-text">Toggle Color Scheme</span>
      </label>
      <span>☀️</span>
    </div>
  );
};

export default ToggleSwitch;