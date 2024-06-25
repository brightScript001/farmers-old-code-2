import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import RoleSelection from './pages/roleSelection';
import AuthRoutes from './routes/AuthRoutes';
import SellerDashboard from './pages/sellerDashboard'
import BuyerDashboard from './pages/buyerDashboard';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="seller-dashboard" element={<SellerDashboard />} />
        <Route path="buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
