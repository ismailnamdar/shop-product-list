import React from "react";
import  {useTranslation } from "react-i18next";

const NoMatch = () => {
  const { t } = useTranslation("translations");
  return (
    <div>
      {t("notFound")}
    </div>
  );
};

export default NoMatch;
