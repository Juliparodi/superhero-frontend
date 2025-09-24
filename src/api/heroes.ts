import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

export interface Hero {
    id?: number;
    name: string;
    description: string;
    birthDate: string;
    creationDate?: string;
    modifiedDate?: string;
}

export const fetchHeroes = async () => {
    const res = await axios.get<Hero[]>(`${API_URL}/superheroes`);
    return res.data;
};

export const fetchHero = async (id: number) => {
    const res = await axios.get<Hero>(`${API_URL}/superheroes/${id}`);
    return res.data;
};

export const createHero = async (hero: Hero) => {
    const res = await axios.post<Hero>(`${API_URL}/hero`, hero);
    return res.data;
};

export const updateHero = async (id: number, hero: Hero) => {
    const res = await axios.put<Hero>(`${API_URL}/hero/${id}`, hero);
    return res.data;
};

export const deleteHero = async (id: number) => {
    const res = await axios.delete(`${API_URL}/hero/${id}`);
    return res.data;
};