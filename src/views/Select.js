import React from "react";
import PropTypes from "prop-types";
import "./Select.sass";

const Select = ({ children, margin, defaultValue, onChange }) => {
  return (
    <select
      className="Select"
      style={{ margin }}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  margin: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Select.defaultProps = {
  margin: 0,
  children: <></>,
};

export default Select;
