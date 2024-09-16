import { AuthRoutes } from "@/auth/routes/AuthRoutes"
import { Navigate, Route, Routes } from "react-router-dom"
import { ProtectedRouter } from "./ProtectetRouter"
import { InventoryRoutes } from "@/inventory/routes/InventoryRoutes"
import { CategoriesRoutes } from "@/Categories/routes/CategoriesRoutes"
import { AdministrationLayout } from "@/UI/layout/AdministrationLayout"


export const AppRouter = () => {


  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />

      <Route path="/" element={<ProtectedRouter />}>
        <Route index element={<Navigate to="administration" />} />
        <Route path="administration/*" element={<AdministrationLayout />}>
          <Route index element={<Navigate to="inventory" />} />
          <Route path="inventory/*" element={<InventoryRoutes />} />
          <Route path="categories/*" element={<CategoriesRoutes />} />
        </Route>


        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Route>


      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  )
}
