import {
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "../styles/InventoryStatistics.css";

const plantingData = [
  { name: "Planting", value: 33, color: "#f1c40f" },
  { name: "Harvesting", value: 67, color: "#27ae60" },
];

const usageData = [
  { name: "Jan", Fertilizer: 40, Manure: 24, Pesticide: 24, Herbicides: 12 },
  { name: "Feb", Fertilizer: 30, Manure: 13, Pesticide: 22, Herbicides: 15 },
  { name: "Mar", Fertilizer: 20, Manure: 98, Pesticide: 22, Herbicides: 18 },
  { name: "Apr", Fertilizer: 27, Manure: 39, Pesticide: 20, Herbicides: 12 },
  { name: "May", Fertilizer: 18, Manure: 48, Pesticide: 21, Herbicides: 15 },
  { name: "Jun", Fertilizer: 23, Manure: 38, Pesticide: 25, Herbicides: 18 },
  { name: "Jul", Fertilizer: 34, Manure: 43, Pesticide: 21, Herbicides: 19 },
  { name: "Aug", Fertilizer: 24, Manure: 34, Pesticide: 23, Herbicides: 22 },
  { name: "Sep", Fertilizer: 24, Manure: 45, Pesticide: 24, Herbicides: 23 },
  { name: "Oct", Fertilizer: 34, Manure: 54, Pesticide: 25, Herbicides: 24 },
  { name: "Nov", Fertilizer: 25, Manure: 65, Pesticide: 26, Herbicides: 25 },
  { name: "Dec", Fertilizer: 24, Manure: 76, Pesticide: 27, Herbicides: 26 },
];

const InventoryStatistics = () => {
  return (
    <div className="inventory-statistics">
      <h2>Inventory Statistics</h2>

      <div className="chart-section">
        <h3>Planting and Harvesting</h3>
        <PieChart width={200} height={200}>
          <Pie
            data={plantingData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {plantingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
        <p>
          Farm yield is 67%. This is a 14% decrease from last planting season
        </p>
      </div>

      <div className="chart-section">
        <h3>Farm Supplies Usage</h3>
        <LineChart width={300} height={200} data={usageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Fertilizer" stroke="#ff0000" />
          <Line type="monotone" dataKey="Manure" stroke="#f1c40f" />
          <Line type="monotone" dataKey="Pesticide" stroke="#000000" />
          <Line type="monotone" dataKey="Herbicides" stroke="#27ae60" />
        </LineChart>
      </div>
    </div>
  );
};

export default InventoryStatistics;
