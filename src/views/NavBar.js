import React from "react";
import PropTypes from "prop-types";
import "./NavBar.sass";

const NavBar = ({ children }) => {
  return <div className="NavBar">{children}</div>;
};

NavBar.propTypes = {
  children: PropTypes.node,
};

NavBar.defaultProps = {
  children: <></>,
};

export default NavBar;
