import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "./Input.sass";

const Input = ({ value, width, placeholder, onChange }) => {
  const handleChange = useCallback(
    (event) => {
      const newValue = event.target.value;
      onChange(newValue);
    },
    [onChange]
  );
  return (
    <input
      className="Input"
      value={value}
      width={width}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  width: "200px",
  placeholder: "",
  onChange: () => {},
};

export default Input;
