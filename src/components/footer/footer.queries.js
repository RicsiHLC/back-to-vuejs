import gql from "graphql-tag";

export const FOOTER_QUERY = gql`
  query {
    company {
        headquarters {
      address
      city
      state
    }
    launch_sites
    }
  }
`;
