import { Routes, Route } from 'react-router-dom'
import { CategoryForm } from '../components/CategoryForm'
import { CateogriesLayout } from '../layout/CateogriesLayout'



export const CategoriesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CateogriesLayout />} >
        <Route path="/" element={<CategoryForm />} />
        <Route path="edit/:id" element={<CategoryForm />} />
      </Route>
    </Routes>
  )
}
