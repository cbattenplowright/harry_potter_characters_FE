import "./CharacterList.css";
import Character from "./Character";

const CharacterList = ({ characters }) => {
    const characterList = characters.map((character) => {
        return <Character key={character.id} character={character} />;
    });
    return (
        <div>
            <h2>Character List:</h2>
            <div className="character-list">{characterList}</div>
        </div>
    );
};

export default CharacterList;
