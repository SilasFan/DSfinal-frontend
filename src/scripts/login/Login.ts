import sendGQL from '@/SendGQL';

interface LoginInput {
    username: string;
    password: string;
}

const LOGIN: string = `
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      ... on LoggedInToken {
        token
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

export default (loginInput: LoginInput) =>
    sendGQL({
        query: LOGIN,
        variables: {
            loginInput,
        },
    });
