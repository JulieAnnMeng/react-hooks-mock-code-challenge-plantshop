import React from "react";

function Search({search, setSearch}) {
  function handleSearch (e) {
    const value = e.target.value;
    setSearch(value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e)}
        value={search}
      />
    </div>
  );
}

export default Search;
