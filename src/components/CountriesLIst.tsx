import type { FC } from "react";
import { useState } from "react";

import { useCountries, useCountry } from "../api/graphql/hooks";

const CountriesList: FC = () => {
  const { countries, loading, error } = useCountries();
  const [selectedCode, setSelectedCode] = useState<string>("");
  const { country } = useCountry(selectedCode ?? "");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Countries List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.code} onClick={() => setSelectedCode(country.code)}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
      {country && (
        <div>
          <h2>Country Details</h2>
          <p>Code: {country.code}</p>
          <p>Name: {country.name}</p>
          <p>Capital: {country.capital}</p>
          <p>Currency: {country.currency}</p>
          <p>Emoji: {country.emoji}</p>
        </div>
      )}
    </div>
  );
};

export default CountriesList;
