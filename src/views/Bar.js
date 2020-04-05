import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Bar.sass";

const Bar = ({
  justifyContent,
  navigation,
  padding,
  children,
  isExtraLight,
}) => {
  return (
    <div
      className={classNames({
        Bar__bar: !navigation,
        Bar: navigation,
        "is-extra-light": isExtraLight,
        "is-dark": !isExtraLight,
      })}
      style={{ padding, justifyContent }}
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
  isExtraLight: PropTypes.bool,
};

Bar.defaultProps = {
  children: <></>,
  navigation: false,
  justifyContent: "space-between",
  padding: "0px",
  isExtraLight: false,
};

export default Bar;
