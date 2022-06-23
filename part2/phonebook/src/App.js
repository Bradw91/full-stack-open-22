import { useState } from "react";
import Number from "./components/Number";

const App = () => {

  //if getting from API, default state should be the current state of the API call for the endpoint
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  //use true/false booleans to control search
  const [searching, setSearching] = useState(false);

  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    //need to match the data structure type of what was defined in State
    const personObject = {
      name: newName,
      number: newPhoneNumber,
    };
    const person = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    let error = false;

    if (person) {
      alert(`${newName}'s name is already in the phonebook`);
      setNewName("");
      error = true;
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handlePhoneNumber = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  
  const handleSearch = e => {
    e.preventDefault();
    const term = e.target.value;
    if (term.trim().length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    setSearchTerm(term);
  };

  const getContent = () => {
    let currentPersons = null;
    if (searching) {
      //use filter to get the persons who match the search value, can be used also to filter the data from an API if called
      currentPersons = persons.filter(person => {
        return (
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.number.includes(searchTerm)
        );
      });
    } else {
      currentPersons = [...persons];
    }

    return currentPersons.map(person => (
      <li key={person.id}>
        {person.name}
        {": "}
        {person.number}
      </li>
    ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <strong>Search by Name: </strong>
        <input onChange={handleSearch} value={searchTerm} />
      </div>
      <h2>Add a New Contact</h2>
      <form>
        <div>
          name: <input onChange={handlePersonChange} />
        </div>
        <div>
          Phone Number: <input onChange={handlePhoneNumber} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Contacts</h2>
      <ul>
        {getContent()}
      </ul>
    </div>
  );
};

export default App;
