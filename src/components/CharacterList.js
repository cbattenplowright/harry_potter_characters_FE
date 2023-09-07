import Character from "./Character";

const CharacterList = ({ characters }) => {
    const characterList = characters.map((character) => {
        return <Character key={character.id} character={character} />;
    });
    return (
        <>
            <h3>Character List:</h3>
            {characterList}
        </>
    );
};

export default CharacterList;
