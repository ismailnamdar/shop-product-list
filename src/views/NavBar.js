import React, { useCallback } from "react";
import { FaGlobe, FaWineGlassAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../configs/i18n";
import Bar from "./Bar";

const NavBar = ({ children }) => {
  const history = useHistory();
  const { t } = useTranslation("translations");
  const handleHomeClick = useCallback(() => {
    history.push("/");
  }, [history]);
  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  }, []);
  return (
    <Bar padding="8px 12px 8px 12px" justifyContent="space-between" navigation>
      <FaWineGlassAlt
        color="white"
        size="2em"
        title={t("returnHomePage")}
        role="button"
        tabindex={0}
        onClick={handleHomeClick}
        onKeyPress={handleHomeClick}
      />
      {children}
      <FaGlobe
        color="white"
        size="2em"
        title={t("changeLanguage")}
        role="button"
        tabindex={0}
        onClick={toggleLanguage}
        onKeyPress={toggleLanguage}
      />
    </Bar>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};

NavBar.defaultProps = {
  children: <></>,
};

export default NavBar;
