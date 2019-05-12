import sendGQL from '@/SendGQL';

const HOTS = `
query hotest{
    hots {
        ... on Hots {
          hots {
            ... on LearningResourceInfo {
              id
              title
            }
            ... on SchoolHeatInfo {
              id
              title
            }
            ... on EntertainmentInfo {
              id
              title
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

export default () =>
    sendGQL({
        query: HOTS,
    });
