import sendGQL from '@/SendGQL';

const FOUND_INFO = `
  query FoundInfo($id: ID!) {
    foundInfo(id: $id) {
      ... on FoundInfo {
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
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

export default (id: string) =>
    sendGQL({
        query: FOUND_INFO,
        variables: {
            id,
        },
    });
