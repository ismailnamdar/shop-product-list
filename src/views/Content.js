import React from "react";
import "./Content.sass";
import PropTypes from "prop-types";

const Content = ({ backgroundColor, children }) => {
  return (
    <div style={{ backgroundColor }} className="Content">
      {children}
    </div>
  );
};

Content.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

Content.defaultProps = {
  backgroundColor: undefined,
  children: <></>,
};

export default Content;
