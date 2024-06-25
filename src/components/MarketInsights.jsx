import React from "react";
import "../styles/MarketInsights.css";

const dummyData = [
  { product: "rice", demand: 30 },
  { product: "sugarcane", demand: 92 },
  { product: "palm oil", demand: 8 },
  { product: "corn", demand: -0.9 },
  { product: "corn", demand: -0.9 },
  { product: "corn", demand: -0.9 },
  { product: "corn", demand: -0.9 },
  { product: "corn", demand: -0.9 },
];

const sortedData = dummyData.sort((a, b) => b.demand - a.demand);

const MarketInsights = () => {
  return (
    <div className="market-insights">
      <h2>Market Insights</h2>
      <ul>
        {sortedData.map((item, index) => (
          <li key={index} className={item.demand > 0 ? "high" : "low"}>
            Demand for {item.product}{" "}
            <span>
              (
              {item.demand > 0 ? `High ${item.demand}%` : `Low ${item.demand}%`}
              )
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketInsights;
