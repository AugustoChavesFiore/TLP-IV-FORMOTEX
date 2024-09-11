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
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";


const formSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

export const LoginForm = () => {

    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await login(values);
        form.reset();
        navigate('/');
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-3/4 m-auto">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo Electronico</FormLabel>
                            <FormControl>
                                <Input placeholder="usuario@mail.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant={'secondary'} >Ingresar</Button>
            </form>
        </Form>

    )
}