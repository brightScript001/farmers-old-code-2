import React from "react";
import "../styles/sellerDashboardCard.css";
import config from "../content/sellerDashboardCard.config.json";

const Card = ({ title, count, subtitle, className = "" }) => (
  <div className={`card ${className}`}>
    <div className="card-title">{title}</div>
    <div className={count ? "card-count" : "card-amount"}>
      {count || subtitle}
    </div>
    {count && <div className="card-subtitle">{subtitle}</div>}
  </div>
);

const PendingOrders = () => {
  const { title, count, subtitle } = config.pendingOrders;
  return <Card title={title} count={count} subtitle={subtitle} />;
};

const SettledOrders = () => {
  const { title, count, subtitle } = config.settledOrders;
  return <Card title={title} count={count} subtitle={subtitle} />;
};

const Revenue = () => {
  const { title, amount, subtitle } = config.revenue;
  return (
    <Card
      title={title}
      count={amount}
      subtitle={subtitle}
      className="revenue-card"
    />
  );
};

const DashboardCards = () => {
  return (
    <>
      <PendingOrders />
      <SettledOrders />
      <Revenue />
    </>
  );
};

export default DashboardCards;
