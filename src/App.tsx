import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroesList from "./pages/HeroesList";
import HeroDetail from "./pages/HeroDetail";
import CreateHero from "./pages/CreateHero";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HeroesList />} />
                    <Route path="/heroes/:id" element={<HeroDetail />} />
                    <Route path="/create" element={<CreateHero />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;