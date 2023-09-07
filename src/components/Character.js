import "./Character.css";

const Character = ({ character }) => {
    const capitaliseWord = (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    };

    return (
        <div className="character">
            <h3>{character.name}</h3>
            <img
                src={character.image}
                alt={`Image of ${character.name}`}
                width={163}
                height={227}
            />
            <p>Species: {capitaliseWord(character.species)}</p>
            <p>Gender: {capitaliseWord(character.gender)}</p>
            <p>Ancestry: {capitaliseWord(character.ancestry)}</p>
            <p>House: {character.house}</p>
        </div>
    );
};

export default Character;
