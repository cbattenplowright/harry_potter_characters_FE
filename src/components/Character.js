const Character = ({ character }) => {
    return (
        <>
            <h5>{character.name}</h5>
            <img
                src={character.image}
                alt={`Image of ${character.name}`}
                width={163}
                height={227}
            />
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Ancestry: {character.ancestry}</p>
            <p>House: {character.house}</p>
        </>
    );
};

export default Character;
