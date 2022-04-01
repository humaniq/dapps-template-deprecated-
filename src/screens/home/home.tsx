import React from "react";
import { observer } from "mobx-react";
import { Button, Card, Input, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

export const Home = observer(() => {
  const { t } = useTranslation();

  return (
    <Card className="home-card">
      <Space direction="vertical">
        <Typography.Title level={1}>{t("firstName")}</Typography.Title>
        <Typography.Text>{t("firstName")}</Typography.Text>

        <Input size={"large"} onChange={() => {}} value={""} />
        <Typography.Text>{t("lastName")}</Typography.Text>
        <Input size={"large"} onChange={() => {}} value={""} />

        <Button size={"large"} className="home-button" type="primary">
          {t("update")}
        </Button>
      </Space>
    </Card>
  );
});
