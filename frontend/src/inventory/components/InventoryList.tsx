
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

import { useInventoryStore } from "../store/inventory.store";
import { useCategoryStore } from "@/Categories/store/CategoryStore";
import { DialogForm } from "./DialogForm";
import { AlertDialogDelete } from "@/UI/components/AlertDialog";
import { useOrganizationStore } from "@/organization/store/Organization.store";



export const InventoryList = () => {

    const inventory = useInventoryStore((state) => state.inventory);
    const deleteInventory = useInventoryStore((state) => state.deleteInventory);
    const getCategory = useCategoryStore((state) => state.getCategory);
    const getOrganization = useOrganizationStore((state) => state.getOrganization);

    return (
        <Table>
            <TableCaption>Categorias</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Sección</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Organización</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Fecha de Adquisición</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    inventory.length > 0 ? inventory.map((inv) => (
                        <TableRow key={inv._id}>
                            <TableCell>{inv.name}</TableCell>
                            <TableCell>{inv.section}</TableCell>
                            <TableCell>{inv.status}</TableCell>
                            <TableCell>{getOrganization(inv.organization)?.name}</TableCell>
                            <TableCell>{inv.description}</TableCell>
                            <TableCell>{getCategory(inv.category)?.name}</TableCell>
                            <TableCell>{new Date(inv.adquisitionDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <DialogForm id={inv._id} />
                                <AlertDialogDelete title="Eliminar" handleDelete={() => deleteInventory(inv._id)} />
                            </TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell colSpan={8}>Inventario Vacio</TableCell>
                    </TableRow>
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={8}>
                        Cantidad de Inventario:
                        {inventory.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
