import React from "react";
import "../styles/sellerDashboardCard.css";
import config from "../content/sellerDashboardCard.config.json";

const Revenue = () => {
  const { title, amount, subtitle } = config.revenue;
  return (
    <div className="card revenue-card">
      <div className="card-title">{title}</div>
      <div className="card-amount">{amount}</div>
      <div className="card-subtitle">{subtitle}</div>
    </div>
  );
};

export default Revenue;
