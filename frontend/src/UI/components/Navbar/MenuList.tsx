import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { UserMenu } from "./UserMenu";
import { ModeToggle } from "@/components/shadcn/mode-toggle";
import { AuthNav } from "./AuthNav";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu";
import { NavigationMenuItem } from "@/components/shadcn/ui/navigation-menu";
import { useAuthStore } from "@/auth/store/auth.store";




export const MenuList = () => {

  const navigate = useNavigate();



  const navigation = [
  ];
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (user?.role === 'admin') {
    navigation.push({ title: 'Administración', path: '/administration' });
    navigation.push({ title: 'Dashboard', path: '/dashboard' });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };


  return (
    <>
      {navigation.map(({ path, title }, index) => (
        <Navigation key={index} path={path} title={title} />
      ))}
      <NavigationMenuItem asChild>
        <ModeToggle />
      </NavigationMenuItem>
      {!user ? (
        <NavigationMenuItem asChild>
          <AuthNav />
        </NavigationMenuItem>
      ) : (
        <NavigationMenuItem asChild>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <UserMenu handleLogout={handleLogout} firstName={user.name} />
          </DropdownMenu>
        </NavigationMenuItem>
      )}
    </>
  );
};
