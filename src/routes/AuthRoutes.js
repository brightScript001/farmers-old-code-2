import { Routes, Route } from 'react-router-dom';
import BuyerSignUp from '../Auth/BuyerSignUp';
import SellerSignUp from '../Auth/SellerSignUp';
import VerifyEmailPage from '../Auth/VerifyEmail';
import VerifyEmailSuccessPage from '../Auth/verifyEmailSuccess';
import Login from '../Auth/Login';
import ForgotPasswordPage from '../Auth/ForgotPasswordPage';
import SentEmailPage from '../Auth/SentEmailPage';
import ResetPasswordPage from '../Auth/ResetPasswordPage';
import PasswordResetSuccessPage from '../Auth/PasswordResetSuccessPage';

function AuthRoutes() {
    return (

        <Routes>
            <Route path="buyer-signup" element={<BuyerSignUp />} />
            <Route path="seller-signup" element={<SellerSignUp />} />
            <Route path="verify-email" element={<VerifyEmailPage />} />
            <Route path="verify-email-success" element={<VerifyEmailSuccessPage />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="sent-email" element={<SentEmailPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="password-reset-success" element={<PasswordResetSuccessPage />} />

        </Routes>
    );
}

export default AuthRoutes;
