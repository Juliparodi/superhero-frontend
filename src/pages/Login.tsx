import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ username, password }).toString(),
            });

            if (!res.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await res.json();        // expects { token: "…" }
            localStorage.setItem("token", data.token);

            navigate("/");                         // redirect after login
        } catch (err: any) {
            setError(err.message || "Login failed");
        }
    };

    return (
        <div className="max-w-sm mx-auto p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}