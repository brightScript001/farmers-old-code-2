import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/roleSelection';
import AuthRoutes from './routes/AuthRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
}

export default App;
