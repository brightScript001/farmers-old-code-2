import React from 'react';
import '../styles/sellerDashboardCard.css';
import config from '../content/sellerDashboardCard.config.json';

const PendingOrders = () => {
    const { title, count, subtitle } = config.pendingOrders;
    return (
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="card-count">{count}</div>
            <div className="card-subtitle">{subtitle}</div>
        </div>
    );
};

export default PendingOrders;
