import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import SideBar from "../layouts/sideBar";
import Header from "../layouts/header";
import SettledOrders from "../components/SettledOrders";
import Revenue from "../components/Revenue";
import MarketInsights from "../components/MarketInsights";
import InventoryStatistics from "../components/InventoryStatistics";
import PendingOrders from "../components/PendingOrders";
import PendingOrdersList from "../components/PendingOrdersList";

const SellerDashboard = () => {
  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {/* Sidebar */}
      <Grid item xs={2} style={{ backgroundColor: "#f5f5f5" }}>
        <SideBar />
      </Grid>

      {/* Header and Main Content */}
      <Grid item xs={10} style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Box
          component="main"
          style={{
            padding: "1rem",
            flexGrow: 1,
            backgroundColor: "#f9f9f9",
            overflowY: "auto",
          }}
        >
          <Grid container spacing={2}>
            {/* Top Cards */}
            <Grid item xs={12} md={4}>
              <Box
                style={{
                  padding: "1rem",
                }}
              >
                <PendingOrders />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                style={{
                  padding: "1rem",
                }}
              >
                <SettledOrders />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                style={{
                  padding: "1rem",
                }}
              >
                <Revenue />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={5}>
              <Box
                style={{
                  padding: "1rem",
                }}
              >
                <PendingOrdersList />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Box
                style={{
                  padding: "1rem",
                }}
              >
                <MarketInsights />
              </Box>
            </Grid>

            {/* Inventory Statistics */}
            <Grid item xs={12} md={6} lg={4}>
              <Box
                style={{
                  padding: "1rem",
                }}
              >
                <InventoryStatistics />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SellerDashboard;
