import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./NavBar.sass";

const NavBar = ({ spaceBetween, children }) => {
  return (
    <div
      className={classNames("NavBar", { NavBar__spaceBetween: spaceBetween })}
    >
      {children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
  spaceBetween: PropTypes.bool,
};

NavBar.defaultProps = {
  children: <></>,
  spaceBetween: false,
};

export default NavBar;
