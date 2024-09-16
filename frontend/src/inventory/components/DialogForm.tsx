import { Button } from "@/components/shadcn/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/shadcn/ui/dialog"

import { InventoryForm } from "./InventoryForm"

export function DialogForm({ id }: { id?: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={id ? 'link' : 'default'}
                >
                    {
                        id ? 'Editar' : 'Crear Inventario'
                    }
                </Button>
            </DialogTrigger>
            <DialogContent className=" sm: max-[700px]">
                <DialogHeader>
                    <DialogTitle>
                        {
                            id ? 'Editar Inventario' : 'Crear Inventario'
                        }
                    </DialogTitle>
                    <DialogDescription>
                        {
                            id ? 'Edita los campos que desees' : 'Llena los campos para crear un nuevo inventario'
                        }
                    </DialogDescription>
                </DialogHeader>
                <InventoryForm
                    id={id}
                />
            </DialogContent>
        </Dialog>
    )
}
