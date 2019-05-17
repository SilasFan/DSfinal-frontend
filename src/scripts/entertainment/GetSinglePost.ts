import sendGQL from '@/SendGQL';

const ENTERTAINMENT_INFO = `
query EntertainmentInfo($id: ID!) {
    entertainmentInfo(id: $id) {
        ... on EntertainmentInfo {
            allComments {
                comments {
                    creationTime
                    author {
                        introduction
                        username
                        pictureURL
                        userId
                    }
                    content {
                        items {
                            ... on Paragraph {
                                text
                            }
                            ... on Picture {
                                url
                            }
                        }
                    }
                    id
                }
                totalCount
            }
            createTime
            author {
                introduction
                username
                pictureURL
                userId
            }
            content {
                items {
                    ... on Paragraph {
                        text
                    }
                    ... on Picture {
                        url
                    }
                }
            }
            title
            id
        }
        ... on Error {
            msg
            errCode
        }
    }
}
`;

export default (id: string) =>
    sendGQL({
        query: ENTERTAINMENT_INFO,
        variables: {
            id,
        },
    });
