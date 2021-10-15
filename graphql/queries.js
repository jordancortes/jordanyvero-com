import { gql } from "@apollo/client";

export const getInvitation = gql`
  query Invitation($code: String!) {
    invitation(query: { code: $code }) {
      code
      family_name
      email
      primary_phone
      secondary_phone
      assistance
      max_assistance
      submitted
      message
      guests {
        name
        diet
        transport
        allergies
      }
    }
  }
`;
