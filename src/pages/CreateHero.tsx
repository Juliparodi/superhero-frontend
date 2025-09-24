import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHero, Hero } from "../api/heroes";
import HeroForm from "../components/HeroForm";

export default function CreateHero() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation((data: Hero) => createHero(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(["heroes"]);
            navigate("/");
        },
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Hero</h1>
            <HeroForm onSubmit={(data) => mutation.mutate(data)} />
        </div>
    );
}
