import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcn/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { HeadNav } from './HeadNav';
import { MenuList } from './MenuList';
import { NavigationMenu } from '@/components/shadcn/ui/navigation-menu';
import { NavigationMenuList } from '@/components/shadcn/ui/navigation-menu';
import { useState } from 'react';

export const SheetNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-8">
            <SheetTitle onClick={() => setIsOpen(!isOpen)}>
              <HeadNav />
            </SheetTitle>
          </SheetHeader>
          <NavigationMenu>
            <NavigationMenuList className='flex flex-col-reverse gap-3' onClick={() => setIsOpen(!isOpen)}>
              <MenuList />
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};
