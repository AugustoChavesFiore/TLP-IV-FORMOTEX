import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/shadcn/ui/navigation-menu';


import { SheetNav } from './SheetNav';
import { MenuList } from './MenuList';
import { HeadNav } from './HeadNav';

export const Navbar = () => {


  return (
    <header className=" w-full shadow">
      <NavigationMenu className="container p-5 min-w-full justify-between">

        <HeadNav />

        <SheetNav />  {/* solo se muestra en sm */}

        <NavigationMenuList className="hidden sm:flex">
          <MenuList />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
