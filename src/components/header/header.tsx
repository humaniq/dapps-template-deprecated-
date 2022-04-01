import React from "react";
import { Layout } from "antd";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Layout.Header className="header">
      <div className="header-user-actions">
        <span>{t("appName")}</span>
      </div>
    </Layout.Header>
  );
};

export default Header;
