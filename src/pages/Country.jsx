import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const { countryName } = useParams();

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const country = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        const data = await res.json();
        setCountryData(data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    country();
  }, [countryName]);

  if (!countryData) return <h2>Loading...</h2>;

  return (
    <div className="country-wrapper">
      <div className="country-card">
        <h2 className="country-title">{countryData.name.common}</h2>
        <div className="country-details">
          {/* <p>
            <span className="label">Official Name: </span>
            {countryData.name.official}
          </p> */}

          {/* Official & Native names */}
          <div className="label">Official & Native Names:</div>
          <ul>
            <li>{countryData.name.official}</li>
            {countryData.name.nativeName &&
              Object.values(countryData.name.nativeName).map((n, i) => (
                <li key={i}>{n.official}</li>
              ))}
          </ul>

          {/* Capitals */}
          {countryData.capital && (
            <>
              <div className="label">Capital(s):</div>
              <ul>
                {countryData.capital.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </>
          )}

          {/* Region & Subregion */}
          <div className="label">Region & Subregion:</div>
          <ul>
            <li>Region: {countryData.region}</li>
            {countryData.subregion && (
              <li>Subregion: {countryData.subregion}</li>
            )}
          </ul>

          {/* Population & Area */}
          <div className="label">Population & Area:</div>
          <ul>
            <li>Population: {countryData.population.toLocaleString()}</li>
            {countryData.area && (
              <li>Area: {countryData.area.toLocaleString()} km²</li>
            )}
          </ul>

          {/* Languages */}
          {countryData.languages && (
            <>
              <div className="label">Languages:</div>
              <ul>
                {Object.values(countryData.languages).map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </>
          )}

          {/* Currencies */}
          {countryData.currencies && (
            <>
              <div className="label">Currencies:</div>
              <ul>
                {Object.values(countryData.currencies).map((c, i) => (
                  <li key={i}>
                    {c.name} ({c.symbol})
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Borders */}
          <div className="label">Borders:</div>
          <ul>
            {countryData.borders ? (
              countryData.borders.map((b, i) => <li key={i}>{b}</li>)
            ) : (
              <li>None</li>
            )}
          </ul>

          {/* <p>
            <span className="label">Region: </span>
            {countryData.region}
          </p>
          <p>
            <span className="label">Subregion: </span>
            {countryData.subregion}
          </p> */}

          {/* <p>
            <span className="label">Capital: </span>
            {countryData.capital}
          </p> */}

          {/* <p>
            <span className="label">Population: </span>
            {countryData.population.toLocaleString()}
          </p> */}
        </div>
      </div>
      {countryData.flags.png && (
        <div className="country-flag">
          <img src={countryData.flags.png} className="country-img" />
        </div>
      )}
    </div>
  );
};

export default Country;
