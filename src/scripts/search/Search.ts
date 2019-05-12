import sendGQL from '@/SendGQL';

const SEARCH = `
query Search($content: String!) {
    search(content: $content) {
        ... on Searchs {
            searchs {
                ... on PersonalInfo {
                    major
                    school
                    grade
                    username
                    pictureURL
                    userId
                }
                ... on EntertainmentInfo {
                    author {
                        username
                        userId
                    }
                    title
                    id
                }
                ... on SchoolHeatInfo {
                    author {
                        username
                        userId
                    }
                    title
                    id
                }
            }
        }
        ... on Error {
            msg
            errCode
        }
    }
}
`;

export default (content: string) =>
    sendGQL({
        query: SEARCH,
        variables: {
            content,
        },
    });
