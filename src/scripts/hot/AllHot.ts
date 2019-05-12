import sendGQL from '@/SendGQL';

const ALL_SCHOOL_HEATS = `
query AllSchoolHeats($skip: Long, $first: Long, $sortedBy: SortedBy) {
    allSchoolHeats(skip: $skip, first: $first, sortedBy: $sortedBy) {
        ... on MultiSchoolHeats {
            schoolHeats {
                heat
                latestActiveTime
                latestCommenter {
                    username
                    userId
                }
                author {
                    username
                    userId
                }
                title
                id
            }
            totalCount
        }
        ... on Error {
            msg
            errCode
        }
    }
}
`;

export default (skip: number, first: number, sortedBy: string) =>
    sendGQL({
        query: ALL_SCHOOL_HEATS,
        variables: {
            skip,
            first,
            sortedBy,
        },
    });
