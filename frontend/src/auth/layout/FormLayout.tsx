import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";


export const FormLayout = () => {

  const user = useAuthStore(state => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/', { replace: true });
  }, [user]);


  const [title, setTitle] = useState<string>('Auth');

  useEffect(() => {
    switch (location.pathname) {
      case '/auth/login':
        setTitle('Iniciar Sesión');
        break;
      case '/auth/register':
        setTitle('Registrarse');
        break;
      default:
        setTitle('Auth');
        break;
    }
  }, [location.pathname]);


  return (
    <Card className="w-full  sm:w-3/4">
      <CardHeader className="flex flex-col justify-center items-center">
        <LockKeyhole size={48} />
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  );
};