import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Bar.sass";

const Bar = ({
  justifyContent,
  backgroundColor,
  navigation,
  padding,
  children,
}) => {
  return (
    <div
      className={classNames({ NavBar__bar: !navigation, NavBar: navigation })}
      style={{ padding, backgroundColor, justifyContent }}
    >
      {children}
    </div>
  );
};

Bar.propTypes = {
  children: PropTypes.node,
  navigation: PropTypes.bool,
  justifyContent: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Bar.defaultProps = {
  children: <></>,
  navigation: false,
  justifyContent: "space-between",
  padding: "0px",
  backgroundColor: undefined,
};

export default Bar;
