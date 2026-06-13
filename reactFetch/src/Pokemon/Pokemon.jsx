import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
    const id = pokemon.url.split("/").at(-2);
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <li className="pokemon">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={imgURL} alt={pokemon.name} />
        </li>
    );
};

export default Pokemon;
