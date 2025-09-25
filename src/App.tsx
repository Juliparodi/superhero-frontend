import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroesList from "./pages/HeroesList";
import HeroDetail from "./pages/HeroDetail";
import CreateHero from "./pages/CreateHero";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import {JSX} from "react";

const queryClient = new QueryClient();

function RequireAuth({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" replace />;
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<RequireAuth><HeroesList/></RequireAuth>}/>
                    <Route path="/heroes/:id" element={<RequireAuth><HeroDetail/></RequireAuth>}/>
                    <Route path="/create" element={<RequireAuth><CreateHero/></RequireAuth>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;