import { Hero } from "../api/heroes";
import { Link } from "react-router-dom";

export default function HeroCard({ hero }: { hero: Hero }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">{hero.name}</h3>
            <p>{hero.description}</p>
            <p className="text-gray-500">Born: {hero.birthDate}</p>
            <Link to={`/heroes/${hero.id}`} className="text-blue-500 mt-2 block">View / Edit</Link>
        </div>
    );
}
