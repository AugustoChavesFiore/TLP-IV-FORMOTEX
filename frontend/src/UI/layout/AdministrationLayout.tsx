import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '@/components/shadcn/ui/menubar'
import { Link, Outlet } from 'react-router-dom'

export const AdministrationLayout = () => {
    return (
        <main className='p-4'>
            <header className='mb-5'>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Categorias</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <Link to="categories">Categories</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Inventario</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <Link to="inventory">Inventario</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </header>
            <Outlet />
        </main>
    )
}
