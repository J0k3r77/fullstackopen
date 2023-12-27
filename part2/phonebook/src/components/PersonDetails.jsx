const PersonDetails = ({ name, number, handleDelete }) => {
  return (
    <li key={name}>
      {name} : {number}
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default PersonDetails;
