import CountryInfo from "./countryInfo";
import { useState } from "react";

const Display = ({ countriesToDisplay }) => {
  const [show, setShow] = useState(false);
  const [showedCountry, setShowedCountry] = useState(null);

  const numberOfCountries = countriesToDisplay.length;
  const handleShowClick = (country) => {
    setShowedCountry(country);
    if (!show) setShow(!show);
  };

  if (numberOfCountries > 10)
    return <p>Too many matches, specify another filter</p>;
  else if (numberOfCountries <= 10 && numberOfCountries > 1) {
    return (
      <>
        <ul>
          {countriesToDisplay.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleShowClick(country)}>show</button>
            </li>
          ))}
        </ul>
        {show ? <CountryInfo country={showedCountry} /> : null}
      </>
    );
  } else if (numberOfCountries == 1) {
    return <CountryInfo country={countriesToDisplay[0]}></CountryInfo>;
  }
};

export default Display;
