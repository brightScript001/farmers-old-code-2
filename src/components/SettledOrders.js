import React from "react";
import "../styles/sellerDashboardCard.css";
import config from "../content/sellerDashboardCard.config.json";

const SettledOrders = () => {
  const { title, count, subtitle } = config.settledOrders;
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-count">{count}</div>
      <div className="card-subtitle">{subtitle}</div>
    </div>
  );
};

export default SettledOrders;
