import { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const response = await fetch(
            "https://hp-api.onrender.com/api/characters"
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setCharacters(jsonData);
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <>
            <h1>The world of harry potter characters</h1>
            <CharacterList />
        </>
    );
};

export default CharacterContainer;
