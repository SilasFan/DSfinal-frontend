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

const CURRENT_USER = `
  query CurrentUser {
    currentUser {
      ... on PersonalInfo {
        username
        pictureURL
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

function LoginFunc(loginInput: LoginInput) {
    return sendGQL({
        query: LOGIN,
        variables: {
            loginInput,
        },
    });
}

function getInfo(auth: string) {
    return sendGQL({
        query: CURRENT_USER,
        auth,
    });
}

export { getInfo, LoginFunc };
