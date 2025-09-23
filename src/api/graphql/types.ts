export interface Country {
    code: string;
    name: string;
    capital: string;
    currency?: string;
    emoji?: string;
}

export interface CountriesQueryResponse{
    countries: Country[];
}

export interface CountryQueryResponse{
    country: Country | null;
}