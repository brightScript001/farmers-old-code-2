import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/signUpInput.css";

const Input = ({ type, label, value, onChange, error, icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-with-icon">
        <input
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className="input-field"
        />
        {type === "password" && (
          <span className="input-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
        {icon && !type === "password" && (
          <span className="input-icon">{icon}</span>
        )}
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
