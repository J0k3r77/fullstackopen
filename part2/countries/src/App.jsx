import { useState, useEffect } from "react";
import countriesServices from "./services/countriesServices";
import Display from "./components/Display";
import Search from "./components/Search";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");

  useEffect(() => {
    countriesServices.getAll().then((countries) => setCountries(countries));
  }, []);

  const handleSearchChange = (event) => {
    setSearchedCountry(event.target.value);
  };
  const countriesToDisplay = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
  );

  return (
    <div>
      <Search
        searchedCountry={searchedCountry}
        handleSearchChange={handleSearchChange}
      ></Search>
      <Display countriesToDisplay={countriesToDisplay}></Display>
    </div>
  );
};

export default App;
