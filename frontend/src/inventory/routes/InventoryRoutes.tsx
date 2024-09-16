
import { Route, Routes } from 'react-router-dom'
import { InventoryLayout } from '../layout/InventoryLayout'
import { InventoryForm } from '../components/InventoryForm'

export const InventoryRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<InventoryLayout />} >
                <Route path="/" element={<InventoryForm />} />
                <Route path="/edit/:id" element={<InventoryForm />} />
            </Route>
        </Routes>
    )
}
