import dayjs from "dayjs";
import React from "react";
import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer className="footer">
      <span className="footer-text">
        Humaniq dApps React Boilerplate © {dayjs().year()}
      </span>
    </Layout.Footer>
  );
};

export default Footer;
