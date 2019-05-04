import sendGQL from '@/SendGQL';

interface SignUPInput {
    username: string;
    password: string;
    nickname: string;
}

const SIGNUP = `
  mutation Signup($signup: SignupInput!) {
    signup(signup: $signup) {
      ... on LoggedInToken {
        token
      }
      ... on Error {
        msg
        errCode
      }
    }
}`;

export default (signup: SignUPInput) =>
    sendGQL({
        query: SIGNUP,
        variables: {
            signup,
        },
    });
