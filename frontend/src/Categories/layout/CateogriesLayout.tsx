
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import { CategoriesList } from '../components/CategoriesList'
import { Outlet, useParams } from 'react-router-dom'
import { useCategoryStore } from '../store/CategoryStore';
import { useEffect } from 'react';

export const CateogriesLayout = () => {
    const getCategories = useCategoryStore((state) => state.getCategories);

    useEffect(() => {
        getCategories();
    }, [getCategories]);
    const { id } = useParams();
    return (
        <div className='p-2 grid grid-cols-4 gap-4 '>
            <main className='col-span-3'>
                <CategoriesList />
            </main>
            <aside className='col-span-1'>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {id ? 'Editar Categoria' : 'Crear Categoria'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Outlet />
                    </CardContent>
                </Card>
            </aside>
        </div>
    )
}
