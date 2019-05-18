import sendGQL from '@/SendGQL';

const NEWS = `
query News {
  news {
    newss {
      pictureURL
      editTime
      postTime
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
    }
  }
}
`;

export default () =>
    sendGQL({
        query: NEWS,
    });
