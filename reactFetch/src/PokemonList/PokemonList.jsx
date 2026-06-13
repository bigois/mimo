import Pokemon from "../Pokemon/Pokemon.jsx";
import "./PokemonList.css";

const PokemonList = ({ pokemonList }) => {
    return (
        <ul>
            {pokemonList.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
        </ul>
    );
};

export default PokemonList;
