
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { LoginForm, RegisterForm } from '../components';
import { FormLayout } from '../layout/FormLayout';
import { NotFoundPage } from '@/UI/pages/NotFoundPage';


export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />} >
                <Route path='/' element={<FormLayout />}>
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Route>
        </Routes >
    )
}