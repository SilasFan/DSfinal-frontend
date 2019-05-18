import sendGQL from '@/SendGQL';

const ALL_LOSTS = `
  query AllLosts {
    allLosts {
      ... on MultiLostInfos {
        losts {
          claimer {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          lostTime
          contact
          createTime
          pictureURL
          position
          description
          name
          publisher {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
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

export default () =>
    sendGQL({
        query: ALL_LOSTS,
    });
