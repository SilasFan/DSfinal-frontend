import sendGQL from '@/SendGQL';

const LOGOUT = `
  mutation Logout {
    logout {
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

export default (auth: string) =>
    sendGQL({
        query: LOGOUT,
        auth,
    });
