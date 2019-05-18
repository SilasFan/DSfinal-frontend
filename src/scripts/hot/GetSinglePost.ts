import sendGQL from '@/SendGQL';

const SCHOOL_HEAT_INFO = `
query SchoolHeatInfo($id: ID!, $skip: Long, $first: Long) {
    schoolHeatInfo(id: $id) {
        ... on SchoolHeatInfo {
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
            author {
                introduction
                userId
                username
                pictureURL
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
            createTime
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
        query: SCHOOL_HEAT_INFO,
        variables: {
            id,
            skip,
            first
        },
    });
