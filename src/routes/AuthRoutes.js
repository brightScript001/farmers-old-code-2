import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from '../components/fullPageSpinner';

const BuyerSignUp = lazy(() => import('../Auth/BuyerSignUp'));
const SellerSignUp = lazy(() => import('../Auth/SellerSignUp'));
const VerifyEmailPage = lazy(() => import('../Auth/VerifyEmail'));
const VerifyEmailSuccessPage = lazy(() => import('../Auth/verifyEmailSuccess'));
const Login = lazy(() => import('../Auth/Login'));
const ForgotPasswordPage = lazy(() => import('../Auth/ForgotPasswordPage'));
const SentEmailPage = lazy(() => import('../Auth/SentEmailPage'));
const ResetPasswordPage = lazy(() => import('../Auth/ResetPasswordPage'));
const PasswordResetSuccessPage = lazy(() => import('../Auth/PasswordResetSuccessPage'));

function AuthRoutes() {
    return (
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
    );
}

export default AuthRoutes;
