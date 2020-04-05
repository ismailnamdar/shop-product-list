import React from "react";
import "./Content.sass";
import PropTypes from "prop-types";
import classNames from "classnames";

const Content = ({ isExtraLight, children }) => {
  return (
    <div className={classNames("Content", { "is-extra-light": isExtraLight })}>
      {children}
    </div>
  );
};

Content.propTypes = {
  isExtraLight: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  isExtraLight: false,
  children: <></>,
};

export default Content;
