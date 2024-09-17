import { Button } from "@/components/shadcn/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form";

import { Input } from "@/components/shadcn/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useOrganizationStore } from "../store/Organization.store";



const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres",
    }),
    address: z.string().min(2, {
        message: "La dirección debe tener al menos 2 caracteres",
    }),
    phone: z.string().min(2, {
        message: "El teléfono debe tener al menos 2 caracteres",
    }),
    email: z.string().email({
        message: "El email debe ser un email válido",
    }),

});

export const OrganizationForm = ({ id }: { id?: string }) => {

    const navigate = useNavigate();

    const createOrganization = useOrganizationStore((state) => state.createOrganization);
    const updateOrganization = useOrganizationStore((state) => state.updateOrganization);
    const getOrganization = useOrganizationStore((state) => state.getOrganization);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            address: "",
            phone: "",
            email: "",
        },
    });

    useEffect(() => {
        if (id) {
            const organization = getOrganization(id);
            if (organization) {
                form.reset(organization);
            }
        }
        return form.reset();
    }, [id]);


    async function onSubmit(values: z.infer<typeof formSchema>) {

        if (id) {
            await updateOrganization({ ...values, _id: id });

        } else {
            await createOrganization(values);
        }
        form.reset();
        return navigate('/administration/organizations');
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid grid-cols-4 gap-5 justify-center items-center ">
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dirección</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>


                <Button className="col-span-4" type="submit" variant={'default'} >
                    Guardar
                </Button>
            </form>
        </Form>

    )
}