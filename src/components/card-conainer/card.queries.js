import gql from "graphql-tag";

export const MANAGEMENT_QUERY = gql`
  query {
    company {
      ceo
      cto
      coo
      cto_propulsion
    }
  }
`;
export const COMPANY_QUERY = gql`
  query {
    company {
      employees
      founded
      founder
    }
  }
`;
export const MARKETING_QUERY = gql`
  query {
    company {
      valuation
      test_sites
      vehicles
    }
  }
`;
