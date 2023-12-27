import PersonDetails from "./PersonDetails";

const Persons = ({ persons, filteredName, handleDelete }) => {
  const includesFilteredName = (name) => {
    return name.toLowerCase().includes(filteredName.toLowerCase());
  };

  const personsToShow = persons.filter((person) =>
    includesFilteredName(person.name)
  );

  return (
    <ul>
      {personsToShow.map((person) => (
        <PersonDetails
          key={person.name}
          name={person.name}
          number={person.number}
          handleDelete={() => handleDelete(person.id)}
        ></PersonDetails>
      ))}
    </ul>
  );
};

export default Persons;
