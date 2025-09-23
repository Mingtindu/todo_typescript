import { useEffect, useState } from "react";
import { graphqlFetch } from "./client";
import { GET_COUNTRIES, GET_COUNTRY } from "./queries";

import type {
  Country,
  CountriesQueryResponse,
  CountryQueryResponse,
} from "./types";

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await graphqlFetch<CountriesQueryResponse>(GET_COUNTRIES);
        setCountries(data.countries);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { countries, loading, error };
}

export function useCountry(code: string) {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;
    (async () => {
      try {
        const data = await graphqlFetch<CountryQueryResponse>(GET_COUNTRY, {
          code,
        });
        setCountry(data.country);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, [code]);

  return { country, loading, error };
}
