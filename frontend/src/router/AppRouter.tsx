import { AuthRoutes } from "@/auth/routes/AuthRoutes"
import { Route, Routes } from "react-router-dom"
import { ProtectedRouter } from "./ProtectetRouter"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<h1>Products</h1>} />
      <Route path="/" element={<ProtectedRouter />} >
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="administration" element={<h1>administration</h1>} />
      </Route>


    </Routes>
  )
}
