import sendGQL from '@/SendGQL';

const DELETE_SCHOOL_HEAT_COMMENT = `
  mutation DeleteSchoolHeatComment($shId: ID!, $cmmtId: ID!) {
    deleteSchoolHeatComment(shId: $shId, cmmtId: $cmmtId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

export default (shId: string, cmmtId: string, auth: string) =>
    sendGQL({
        query: DELETE_SCHOOL_HEAT_COMMENT,
        variables: {
            shId,
            cmmtId,
        },
        auth,
    });
