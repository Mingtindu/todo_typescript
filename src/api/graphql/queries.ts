export const GET_COUNTRIES = `
  query {
    countries {
      code
      name
      capital
    }
  }
`;

export const GET_COUNTRY = `
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      currency
      emoji
    }
  }
`;