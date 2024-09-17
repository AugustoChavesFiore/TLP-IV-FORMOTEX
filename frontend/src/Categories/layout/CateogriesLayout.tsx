
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import { CategoriesList } from '../components/CategoriesList'
import { Outlet, useParams } from 'react-router-dom'

export const CateogriesLayout = () => {

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
