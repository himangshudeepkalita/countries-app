import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");

  const [region, setRegion] = useState("");

  useEffect(() => {
    const countries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,currencies,population,languages,capital,idd,region,subregion"
        );
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    countries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      !region || country.region.toLowerCase().includes(region.toLowerCase());

    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.trim().toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="countries-page">
      <h2 className="countries-title">Countries</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="region-select"
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceanias</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <div>No countries match your filters.</div>
      ) : (
        <ul className="countries-list">
          {filteredCountries.map((country, index) => (
            <li key={index} className="country-item">
              <Link
                to={`/countries/${country.name.common}`}
                className="country-link"
              >
                {country.name.common}
              </Link>
              <div className="country-info">
                Region: {country.region} | Population:{" "}
                {country.population.toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;
