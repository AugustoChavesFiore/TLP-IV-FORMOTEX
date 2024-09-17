
import { Button } from "@/components/shadcn/ui/button"
import { Link } from "react-router-dom"



export const AuthNav = () => {
  return (
    <div className="flex space-x-1">

      <Button asChild variant={'ghost'}>
        <Link
          to="/auth/login"
        >
          Iniciar Sesión
        </Link>
      </Button>
      <Button asChild variant={'default'}>
        <Link
          to="/auth/register"
        >
          Registrarse
        </Link>
      </Button>
    </div>
  )
}
