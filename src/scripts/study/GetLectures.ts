import sendGQL from '@/SendGQL';

const ALL_LECTURES = `
query AllLectures($skip: Long, $first: Long) {
    allLectures(skip: $skip, first: $first) {
      ... on MultiLectures {
        lectures {
          note
          lecturer
          time
          position
          title
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

export default (skip: number, first: number) =>
    sendGQL({
        query: ALL_LECTURES,
        variables: {
            skip,
            first,
        },
    });
