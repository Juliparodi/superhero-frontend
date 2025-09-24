import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Hero } from "../api/heroes";

const heroSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    birthDate: z.string().min(1, "BirthDate is required"),
});

interface Props {
    initialValues?: Hero;
    onSubmit: (data: Hero) => void;
}

export default function HeroForm({ initialValues, onSubmit }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Hero>({
        resolver: zodResolver(heroSchema),
        defaultValues: initialValues
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded shadow">
            <div>
                <label>Name</label>
                <input {...register("name")} className="border p-2 w-full" />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
                <label>Description</label>
                <textarea {...register("description")} className="border p-2 w-full" />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div>
                <label>BirthDate</label>
                <input type="date" {...register("birthDate")} className="border p-2 w-full" />
                {errors.birthDate && <p className="text-red-500">{errors.birthDate.message}</p>}
            </div>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Save</button>
        </form>
    );
}
