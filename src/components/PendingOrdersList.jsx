import React from "react";
import "../styles/PendingOrderList.css";
import config from "../content/PendingOrderList.config.json";
import { SecondaryButton } from "../components/button.component";

const PendingOrdersList = () => {
  const { orders } = config.pendingOrdersList;

  return (
    <div className="orders-list">
      <h2>Pending Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className="order-item">
          <div className="order-details">
            <div className="order-name">{order.name}</div>
            <div className="order-info">{order.info}</div>
          </div>
          <div className="order-date">{order.date}</div>
          <SecondaryButton>view</SecondaryButton>
        </div>
      ))}
    </div>
  );
};

export default PendingOrdersList;
