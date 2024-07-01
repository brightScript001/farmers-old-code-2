import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Spinner from './components/fullPageSpinner';

// Lazy load the components
const RoleSelection = lazy(() => import('./pages/roleSelection'));
const AuthRoutes = lazy(() => import('./routes/AuthRoutes'));
const SellerDashboard = lazy(() => import('./pages/sellerDashboard'));
const BuyerDashboard = lazy(() => import('./pages/buyerDashboard'));

function App() {
  return (
    <UserProvider>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="seller-dashboard" element={<SellerDashboard />} />
          <Route path="buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
      </Suspense>
    </UserProvider>
  );
}

export default App;
