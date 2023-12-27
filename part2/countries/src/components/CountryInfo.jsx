const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capitale : {country.capital}</p>
      <p>Surface : {country.area}</p>
      <h2>Languages :</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png}></img>
    </div>
  );
};

export default CountryInfo;
