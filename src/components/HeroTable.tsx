import { Hero } from "../api/backendApiCalls";
import HeroCard from "./HeroCard";

interface Props {
    heroes: Hero[];
    loading?: boolean;
}

export default function HeroTable({ heroes, loading }: Props) {
    if (loading) return <div>Loading...</div>;
    if (!heroes.length) return <div>No heroes found</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
        </div>
    );
}
