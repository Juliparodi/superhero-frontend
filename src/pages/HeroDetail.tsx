import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchHero, updateHero, deleteHero, Hero } from "../api/heroes";
import HeroForm from "../components/HeroForm";

export default function HeroDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // ✅ Fetch hero with React Query v4 options object syntax
    const { data: hero, isLoading, isError, error } = useQuery<Hero, Error>({
        queryKey: ["hero", id],
        queryFn: () => fetchHero(Number(id)),
        staleTime: 1000 * 60, // 1 minute cache
    });

    // ✅ Update hero mutation
    const updateMutation = useMutation<Hero, Error, Hero>({
        mutationFn: (data) => updateHero(Number(id), data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["heroes"] }),
    });

    // ✅ Delete hero mutation
    const deleteMutation = useMutation<void, Error>({
        mutationFn: () => deleteHero(Number(id)),
        onSuccess: () => navigate("/"),
    });

    const isUpdating = updateMutation.isPending;
    const isDeleting = deleteMutation.isPending;

    if (!id) return <div>Hero ID is missing</div>;
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.message}</div>;
    if (!hero) return <div>Hero not found</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hero Detail</h1>

            <HeroForm
                initialValues={hero}
                onSubmit={(data) => updateMutation.mutate(data)}
                isSubmitting={isUpdating}
            />

            <button
                onClick={() => deleteMutation.mutate()}
                disabled={isDeleting}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded disabled:opacity-50"
            >
                {isDeleting ? "Deleting..." : "Delete Hero"}
            </button>
        </div>
    );
}