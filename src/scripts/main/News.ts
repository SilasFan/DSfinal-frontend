import sendGQL from '@/SendGQL';

const NEWS = `
  query News {
    news {
      newss {
        pictureURL
        editTime
        postTime
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
