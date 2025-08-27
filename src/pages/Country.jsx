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
          <p>
            <span className="label">Official Name: </span>
            {countryData.name.official}
          </p>
          <p>
            <span className="label">Region: </span>
            {countryData.region}
          </p>
          <p>
            <span className="label">Subregion: </span>
            {countryData.subregion}
          </p>
          <p>
            <span className="label">Capital: </span>
            {countryData.capital}
          </p>
          <p>
            <span className="label">Population: </span>
            {countryData.population.toLocaleString()}
          </p>
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
