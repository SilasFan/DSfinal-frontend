import sendGQL from '@/SendGQL';

const ALL_FOUNDS = `
  query AllFounds {
    allFounds {
      ... on MultiFoundInfos {
        founds {
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
          foundTime
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
        query: ALL_FOUNDS,
    });
