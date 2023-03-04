import { gql } from '@apollo/client';

export const recommendedProfiles = gql`
  query RecommendedProfiles {
    recommendedProfiles {
      id
      name
      bio
      picture {
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      stats {
        totalFollowers
      }
    }
  }
`;
