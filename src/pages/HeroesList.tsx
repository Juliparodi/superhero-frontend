import { useQuery } from "@tanstack/react-query";
import { fetchHeroes, Hero } from "../api/heroes";
import HeroTable from "../components/HeroTable";
import Skeleton from "../components/Skeleton";

export default function HeroesList() {
    const { data, isLoading } = useQuery<Hero[], Error>({
        queryKey: ["heroes"],
        queryFn: fetchHeroes,
    });
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Super Heroes</h1>
            {isLoading ? <Skeleton /> : <HeroTable heroes={data || []} />}
        </div>
    );
}
