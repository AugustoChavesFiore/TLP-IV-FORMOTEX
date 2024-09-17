import { Button } from "@/components/shadcn/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryStore } from "../store/CategoryStore";
import { useEffect } from "react";



const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
    }),
    description: z.string().min(6, {
        message: "La descripción debe tener al menos 6 caracteres.",
    }),
});

export const CategoryForm = () => {

    const navigate = useNavigate();
    const addCategory = useCategoryStore((state) => state.addCategory);
    const getCategory = useCategoryStore((state) => state.getCategory);
    const updateCategory = useCategoryStore((state) => state.updateCategory);
    const { id } = useParams();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    });

    useEffect(() => {
        if (id) {
            const category = getCategory(id);
            if (category) {
                return form.reset(category);
            }
        }
        return form.reset({
            name: "",
            description: "",
        });
    }, [id]);


    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (id) {
            await updateCategory({ ...values, _id: id });

        } else {
            await addCategory(values);

        }
        form.reset({
            name: "",
            description: "",
        });
        return navigate('/administration/categories');
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-3/4 m-auto">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categoria</FormLabel>
                            <FormControl>
                                <Input placeholder="Notebooks" type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant={'secondary'} >
                    Guardar
                </Button>
            </form>
        </Form>

    )
}