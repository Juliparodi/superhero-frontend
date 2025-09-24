import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchHero, updateHero, deleteHero, Hero } from "../api/heroes";
import HeroForm from "../components/HeroForm";

export default function HeroDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data: hero, isLoading } = useQuery(["hero", id], () => fetchHero(Number(id)));

    const updateMutation = useMutation((data: Hero) => updateHero(Number(id), data), {
        onSuccess: () => queryClient.invalidateQueries(["heroes"]),
    });

    const deleteMutation = useMutation(() => deleteHero(Number(id)), {
        onSuccess: () => navigate("/"),
    });

    if (isLoading) return <div>Loading...</div>;
    if (!hero) return <div>Hero not found</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hero Detail</h1>
            <HeroForm
                initialValues={hero}
                onSubmit={(data) => updateMutation.mutate(data)}
            />
            <button
                onClick={() => deleteMutation.mutate()}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
            >
                Delete Hero
            </button>
        </div>
    );
}
