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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn/ui/select"
import { Input } from "@/components/shadcn/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useInventoryStore } from "../store/inventory.store";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/ui/popover";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from 'date-fns/locale'
import { useCategoryStore } from "@/Categories/store/CategoryStore";
import { useOrganizationStore } from "@/organization/store/Organization.store";



const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres",
    }),
    description: z.string().min(6, {
        message: "La descripción debe tener al menos 6 caracteres",
    }),
    section: z.string().min(2, {
        message: "La sección debe tener al menos 2 caracteres",
    }),
    status: z.string().min(2, {
        message: "El estado debe tener al menos 2 caracteres",
    }),
    adquisitionDate: z.date()
        .refine((date) => date < new Date(), {
            message: "La fecha de adquisición no puede ser mayor a la fecha actual",
        }),
    category: z.string().min(2, {
        message: "La categoria debe tener al menos 2 caracteres",
    }),
    organization: z.string().min(2, {
        message: "La organización debe tener al menos 2 caracteres",
    }),

});

export const InventoryForm = ({ id }: { id?: string }) => {

    const navigate = useNavigate();

    const createInventory = useInventoryStore((state) => state.createInventory);
    const updateInventory = useInventoryStore((state) => state.updateInventory);
    const getInventory = useInventoryStore((state) => state.getInventory);
    const categories = useCategoryStore((state) => state.cagegories);
    const organizations = useOrganizationStore((state) => state.organizations);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            section: "",
            status: "",
            adquisitionDate: new Date(),
        },
    });

    useEffect(() => {
        if (id) {
            const inventory = getInventory(id);
            if (inventory) {
                form.reset({
                    ...inventory,
                    category: inventory.category,
                });
            }
        }
        return form.reset();
    }, [id]);


    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        if (id) {
            await updateInventory({ ...values, _id: id });

        } else {
            await createInventory(values);
        }
        form.reset();
        return navigate('/administration');
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
                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="adquisitionDate"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Dia de ingreso</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[220px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPPP", { locale: es })
                                                ) : (
                                                    <span>Seleccione la Fecha</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                {/* <FormDescription>
                                    Ingrese la fecha de adquisición
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="section"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sección</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="A" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione una categoria" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Repacion">
                                                <SelectLabel>Repacion</SelectLabel>
                                            </SelectItem>
                                            <SelectItem value="Nuevo">
                                                <SelectLabel>Nuevo</SelectLabel>
                                            </SelectItem>
                                            <SelectItem value="Usado">
                                                <SelectLabel>Usado</SelectLabel>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Seleccione una categoria
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoria</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione una categoria" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {categories.map((category) => (
                                                <SelectItem key={category._id} value={category._id}>
                                                    <SelectLabel>{category.name}</SelectLabel>
                                                </SelectItem>
                                            ))}

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Seleccione una categoria
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-4">
                    <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Organización</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione una organización" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {organizations.map((organization) => (
                                                <SelectItem key={organization._id} value={organization._id}>
                                                    <SelectLabel>{organization.name}</SelectLabel>
                                                </SelectItem>
                                            ))}

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Seleccione una organización
                                </FormDescription>
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