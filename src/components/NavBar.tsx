import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-blue-700 text-white p-4 flex justify-between">
            <Link to="/" className="font-bold text-lg">SuperHero App</Link>
            <div>
                <Link to="/create" className="mr-4">Add Hero</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}