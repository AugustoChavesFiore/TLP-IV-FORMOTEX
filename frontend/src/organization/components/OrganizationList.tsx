
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

import { DialogFormOrganization } from "./DialogFormOrganization";
import { AlertDialogDelete } from "@/UI/components/AlertDialog";
import { useOrganizationStore } from "../store/Organization.store";



export const InventoryList = () => {

    const Organizations = useOrganizationStore((state) => state.organizations);
    const deleteOrganization = useOrganizationStore((state) => state.deleteOrganization);


    return (
        <Table>
            <TableCaption>Organizaciones</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Acciones</TableCell>

                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    Organizations.length > 0 ? Organizations.map((org) => (
                        <TableRow key={org._id}>
                            <TableCell>{org.name}</TableCell>
                            <TableCell>{org.address}</TableCell>
                            <TableCell>{org.phone}</TableCell>
                            <TableCell>{org.email}</TableCell>
                            <TableCell>{org.status}</TableCell>
                            <TableCell>
                                <DialogFormOrganization id={org._id} />
                                <AlertDialogDelete title="Eliminar" handleDelete={() => deleteOrganization(org._id)} />
                            </TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell colSpan={6}>No hay Organizaciones</TableCell>
                    </TableRow>
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={6}>
                        Cantidad de Organizaciones:
                        {Organizations.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
