
import { Route, Routes } from 'react-router-dom'
import { OrganizationLayout } from '../layout/OrganizationLayout'
import { OrganizationForm } from '../components/OrganizationForm'

export const OrganizationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<OrganizationLayout />} >
                <Route path="/" element={<OrganizationForm />} />
                <Route path="/edit/:id" element={<OrganizationForm />} />
            </Route>
        </Routes>
    )
}
