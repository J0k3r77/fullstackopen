import { useState, useEffect } from "react";
import axios from "axios";
import personsServices from "./services/persons";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    personsServices
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddedContact = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const allNames = persons.map((person) => person.name);
    const allNumbers = persons.map((person) => person.number);

    if (allNames.includes(newPerson.name)) {
      if (
        window.confirm(
          `${newPerson.name} is already in the phonebook, replace the old number with the new one ?`
        )
      ) {
        const person = persons.find((person) => person.name === newPerson.name);
        personsServices
          .update(person.id, newPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((n) =>
                n.id !== updatedPerson.id ? n : updatedPerson
              )
            );
            setNotificationType("success");
            setNotificationMessage(
              `${updatedPerson.name} phone number has been updated to ${updatedPerson.number}`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
          })
          .catch((error) => {
            setNotificationType("error");
            setNotificationMessage(
              `${person.name} has already been removed from server`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
            setPersons(persons.filter((n) => n.id !== person.id));
          });
      }
    } else if (allNumbers.includes(newPerson.number)) {
      setNotificationType("error");
      setNotificationMessage(`${newPerson.number} is already in the phonebook`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 3000);
    } else {
      personsServices.add(newPerson).then((newlyAddedPerson) => {
        setPersons(persons.concat(newlyAddedPerson));
        setNotificationType("success");
        setNotificationMessage(
          `${newlyAddedPerson.name} has been added to the phonebook`
        );
        setTimeout(() => {
          setNotificationMessage(null);
        }, 3000);
      });
    }
  };

  const handleFilterChange = (event) => {
    setFilteredName(event.target.value);
  };

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${person.name} ?`)) {
      personsServices.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filteredName={filteredName}
        handleFilterChange={handleFilterChange}
      ></Filter>
      <h2>Add a new contact</h2>
      <Notification
        notificationType={notificationType}
        message={notificationMessage}
      ></Notification>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleAddedContact={handleAddedContact}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filteredName={filteredName}
        handleDelete={handleDelete}
      ></Persons>
    </div>
  );
};

export default App;
