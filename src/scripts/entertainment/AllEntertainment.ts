import sendGQL from '@/SendGQL';

const ALL_ENTERTAINMENTS = `
query AllEntertainments($skip: Long, $first: Long, $sortedBy: SortedBy) {
    allEntertainments(skip: $skip, first: $first, sortedBy: $sortedBy) {
      ... on MultiEntertainments {
        entertainments {
          heat
          createTime
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
        query: ALL_ENTERTAINMENTS,
        variables: {
            skip,
            first,
            sortedBy,
        },
    });
