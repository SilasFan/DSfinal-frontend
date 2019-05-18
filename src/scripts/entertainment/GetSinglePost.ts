import sendGQL from '@/SendGQL';

const ENTERTAINMENT_INFO = `
query EntertainmentInfo($id: ID!, $skip: Long, $first: Long) {
    entertainmentInfo(id: $id) {
        ... on EntertainmentInfo {
            allComments(skip: $skip, first: $first) {
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

export default (id: string, skip: number, first: number) =>
    sendGQL({
        query: ENTERTAINMENT_INFO,
        variables: {
            id,
            skip,
            first
        },
    });
