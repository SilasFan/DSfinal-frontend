import sendGQL from '@/SendGQL';

const LOST_INFO = `
  query LostInfo($id: ID!) {
    lostInfo(id: $id) {
      ... on LostInfo {
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
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

export default (id: string) =>
    sendGQL({
        query: LOST_INFO,
        variables: {
            id,
        },
    });
