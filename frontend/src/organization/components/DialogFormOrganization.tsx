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

import { OrganizationForm } from "./OrganizationForm"

export function DialogFormOrganization({ id }: { id?: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={id ? 'link' : 'secondary'}
                >
                    {
                        id ? 'Editar' : 'Crear Organización'
                    }
                </Button>
            </DialogTrigger>
            <DialogContent className=" sm: max-[700px]">
                <DialogHeader>
                    <DialogTitle>
                        {
                            id ? 'Editar organización' : 'Crear organización'
                        }
                    </DialogTitle>
                    <DialogDescription>
                        {
                            id ? 'Edita los campos que desees' : 'Llena los campos para crear un nuevo organización'
                        }
                    </DialogDescription>
                </DialogHeader>
                <OrganizationForm
                    id={id}
                />
            </DialogContent>
        </Dialog>
    )
}
