import { ContentInput } from './../hot/Create';
import sendGQL from '@/SendGQL';

const CREATE_ENTERTAINMENT = `
mutation CreateEntertainment($entertainmentInput: EntertainmentInput!) {
    createEntertainment(entertainmentInput: $entertainmentInput) {
        ... on EntertainmentInfo {
            id
        }
        ... on Error {
            msg
            errCode
        }
    }
}
`;

export interface EntertainmentInput {
    title: string;
    content: {
        elems: ContentInput[];
    };
}

export default (entertainmentInput: EntertainmentInput, auth: string) =>
    sendGQL({
        query: CREATE_ENTERTAINMENT,
        variables: {
            entertainmentInput,
        },
        auth,
    });
