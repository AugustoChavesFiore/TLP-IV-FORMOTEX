
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/shadcn/ui/table"
import { useCategoryStore } from "../store/CategoryStore";
import { Link } from "react-router-dom";
import { Button } from "@/components/shadcn/ui/button";



export const CategoriesList = () => {
    const categories = useCategoryStore((state) => state.cagegories);
    const deleteCategory = useCategoryStore((state) => state.deleteCategory);



    return (
        <Table>
            <TableCaption>Categorias</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    categories.length > 0 ? categories.map((category) => (
                        <TableRow key={category._id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{category.description}</TableCell>
                            <TableCell>
                                <Button variant={"link"} asChild>
                                    <Link to={`edit/${category._id}`}>Edit</Link>
                                </Button>
                                <Button variant={"destructive"} onClick={() => deleteCategory(category._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell colSpan={2}>No hay categorias</TableCell>
                    </TableRow>
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}>Total de categorias: {categories.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
