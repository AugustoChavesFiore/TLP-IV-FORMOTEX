import { useCategoryStore } from '@/Categories/store/CategoryStore'
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
import { DialogForm } from '@/inventory/components/DialogForm'
import { useInventoryStore } from '@/inventory/store/inventory.store'
import { useOrganizationStore } from '@/organization/store/Organization.store'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const AdministrationLayout = () => {
    const getOrganizations = useOrganizationStore(state => state.getOrganizations)
    const getCategories = useCategoryStore(state => state.getCategories)
    const getInventories = useInventoryStore(state => state.getInventories)

    useEffect(() => {
      (async ()=>{
        await getOrganizations()
        await getCategories()
        await getInventories()
      })()
    }, [
        getOrganizations,
        getCategories,
        getInventories
    ])


    return (
        <main className='p-4'>
            <header className='mb-5'>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Inventario</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem asChild>
                                <Link to="inventory">Ver Inventario</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            {/* <MenubarItem >
                                <DialogForm />
                            </MenubarItem> */}
                            <MenubarSeparator />
                        </MenubarContent>

                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>Categorias</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem asChild>
                                <Link to="categories">Categories</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>Organizaciones</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem asChild>
                                <Link to="organizations">Ver Organizaciones</Link>
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
