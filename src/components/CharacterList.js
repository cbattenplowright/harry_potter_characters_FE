import Character from "./Character";

const CharacterList = ({ characters }) => {
    const characterList = characters.map((character) => {
        return <Character key={character.id} character={character} />;
    });
    return (
        <>
            <h2>Character List:</h2>
            {characterList}
        </>
    );
};

export default CharacterList;
