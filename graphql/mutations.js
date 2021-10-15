import { gql } from "@apollo/client";

export const updateOneInvitationMutation = gql`
  mutation updateOneInvitation($code: String!, $invitation: InvitationUpdateInput!) {
    updateOneInvitation(query: { code: $code }, set: $invitation) {
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
