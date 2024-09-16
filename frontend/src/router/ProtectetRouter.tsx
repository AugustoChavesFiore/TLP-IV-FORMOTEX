
import { useAuthStore } from "@/auth/store/auth.store";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRouter = () => {

  const user = useAuthStore((state) => state.user);

  return user ? <Outlet /> : <Navigate to="/auth/login" />;
};