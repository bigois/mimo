import { useState, useEffect } from "react";
import PokemonList from "../PokemonList/PokemonList.jsx";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonList = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then((response) => response.json())
            .then((data) => {
                setPokemonList(data.results);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        const timerId = setTimeout(getPokemonList, 500);
        return () => clearTimeout(timerId);
    }, []);

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <PokemonList pokemonList={pokemonList} />
    );
};

export default App;
