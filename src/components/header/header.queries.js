import gql from "graphql-tag";

export const HEADER_COMPANY_NAME = gql`
  query {
    company {
      name
    }
  }
`;
export const HEADER_COMPANY_SUMMARY = gql`
  query {
    company {
      summary
    }
  }
`;

