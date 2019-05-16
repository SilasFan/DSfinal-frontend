import sendGQL from '@/SendGQL';

const CREATE_SCHOOL_HEAT = `
mutation CreateSchoolHeat($schoolHeatInput: SchoolHeatInput!) {
    createSchoolHeat(schoolHeatInput: $schoolHeatInput) {
      ... on SchoolHeatInfo {
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

export interface ContentInput {
    type: 'Picture' | 'Text';
    str: string;
}

export interface SchoolHeatInput {
    title: string;
    content: {
        elems: ContentInput[];
    };
}

export default (schoolHeatInput: SchoolHeatInput, auth: string) =>
    sendGQL({
        query: CREATE_SCHOOL_HEAT,
        variables: {
            schoolHeatInput,
        },
        auth,
    });
