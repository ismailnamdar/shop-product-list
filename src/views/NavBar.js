import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./NavBar.sass";

const NavBar = ({ spaceBetween, padding, children }) => {
  return (
    <div
      className={classNames("NavBar", { NavBar__spaceBetween: spaceBetween })}
      style={{ padding }}
    >
      {children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
  spaceBetween: PropTypes.bool,
  padding: PropTypes.string,
};

NavBar.defaultProps = {
  children: <></>,
  spaceBetween: false,
  padding: "0px",
};

export default NavBar;
