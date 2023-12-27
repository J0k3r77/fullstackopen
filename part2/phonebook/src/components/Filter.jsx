const Filter = ({ filteredName, handleFilterChange }) => {
  return (
    <div>
      Filter shown with :{" "}
      <input value={filteredName} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
