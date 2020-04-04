import React from "react";
import PropTypes from "prop-types";
import "./Select.sass";

const Select = ({ children, margin, value, onChange }) => {
  return (
    <select
      className="Select"
      style={{ margin }}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  margin: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Select.defaultProps = {
  margin: 0,
  children: <></>,
};

export default Select;
