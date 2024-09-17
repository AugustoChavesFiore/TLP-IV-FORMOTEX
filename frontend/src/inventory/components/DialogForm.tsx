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
import { useCategoryStore } from "@/Categories/store/CategoryStore"
import toast from "react-hot-toast"
import { useOrganizationStore } from "@/organization/store/Organization.store"
import { useEffect, useState } from "react"

export function DialogForm({ id }: { id?: string }) {
    const categories = useCategoryStore((state) => state.cagegories);
    const organizations = useOrganizationStore((state) => state.organizations);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (categories.length === 0) toast.error('No hay categorias disponibles');
        if (organizations.length === 0) toast.error('No hay organizaciones disponibles');

        setIsDisabled(categories.length === 0 || organizations.length === 0);
    }, [categories, organizations]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    disabled={isDisabled}
                    variant={id ? 'link' : 'secondary'}
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
