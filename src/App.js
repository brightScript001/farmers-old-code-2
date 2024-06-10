import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/roleSelection/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RoleSelection />} />
    </Routes>
  );
}

export default App;
