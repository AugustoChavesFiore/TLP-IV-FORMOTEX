
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

import { Link } from "react-router-dom";
import { Button } from "@/components/shadcn/ui/button";
import { useInventoryStore } from "../store/inventory.store";
import { useCategoryStore } from "@/Categories/store/CategoryStore";
import { DialogForm } from "./DialogForm";



export const InventoryList = () => {

    const inventory = useInventoryStore((state) => state.inventory);
    const deleteInventory = useInventoryStore((state) => state.deleteInventory);
    const getCategory = useCategoryStore((state) => state.getCategory);

    return (
        <Table>
            <TableCaption>Categorias</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Seccion</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Fecha de Adquisicion</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    inventory.length > 0 ? inventory.map((inv) => (
                        <TableRow key={inv._id}>
                            <TableCell>{inv.name}</TableCell>
                            <TableCell>{inv.description}</TableCell>
                            <TableCell>{inv.section}</TableCell>
                            <TableCell>{inv.status}</TableCell>
                            <TableCell>{new Date(inv.adquisitionDate).toLocaleDateString()}</TableCell>
                            <TableCell>{getCategory(inv.category)?.name}</TableCell>
                            <TableCell>
                                <DialogForm id={inv._id} />
                                <Button className="m-2" variant={"destructive"} onClick={() => deleteInventory(inv._id)}>Borrar</Button>
                            </TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell colSpan={7}>Inventario Vacio</TableCell>
                    </TableRow>
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={7}>
                        Cantidad de Inventario:
                        {inventory.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
