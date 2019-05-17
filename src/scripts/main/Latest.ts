import sendGQL from '@/SendGQL';

const LATESTS = `
query Latests {
    latests {
        ... on Latests {
            latests {
                ... on LearningResourceInfo {
                    createTime
                    title
                    author {
                        username
                    }
                    id
                }
                ... on EntertainmentInfo {
                    heat
                    createTime
                    author {
                        username
                    }
                    title
                    id
                }
                ... on SchoolHeatInfo {
                    heat
                    createTime
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

// 最新动态10条
function getLatestFunc() {
    return sendGQL({
        query: LATESTS,
    });
}

export { getLatestFunc };
