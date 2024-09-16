
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/ui/card'

import { Outlet, useParams } from 'react-router-dom'

import { useEffect } from 'react';
import { InventoryList } from '../components/InventoryList';
import { useInventoryStore } from '../store/inventory.store';


import { DialogForm } from '../components/DialogForm';

export const InventoryLayout = () => {

    // const { id } = useParams();
    const getInventories = useInventoryStore((state) => state.getInventories);
    useEffect(() => {
        getInventories();
    }, [getInventories]);


    return (
        <div className='p-2 grid grid-cols-5 gap-2 '>
            <main className='col-span-5'>
                <div className='my-5'>
                    <DialogForm />
                </div>
                <InventoryList />
            </main>
            {/* <aside className='col-span-2'>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {id ? 'Editar Inventario' : 'Crear Inventario'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Outlet />
                    </CardContent>
                </Card>
                
                
            </aside> */}
        </div>
    )
}
