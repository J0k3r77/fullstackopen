const Search = ({ searchedCountry, handleSearchChange }) => {
  return (
    <div>
      Find countries :{" "}
      <input value={searchedCountry} onChange={handleSearchChange}></input>
    </div>
  );
};

export default Search;
