import { useState } from "react";

const CharacterSearch = () => {
    const [searchQuery, setSearchQuery] = useState(null);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <form id="character-search">
                <label htmlFor="search-query">Search Characters:</label>
                <input
                    id="search-query"
                    name="searchQuery"
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                />
                <input type="submit" value="Search" />
            </form>
        </>
    );
};

export default CharacterSearch;
