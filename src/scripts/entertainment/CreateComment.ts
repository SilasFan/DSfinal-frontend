import sendGQL from '@/SendGQL';
import {ContentInput} from "@/scripts/hot/Create";

const CREATE_ENTERTAINMENT_COMMENT = `
  mutation CreateEntertainmentComment($entertainmentCommentInput: EntertainmentCommentInput!) {
    createEntertainmentComment(entertainmentCommentInput: $entertainmentCommentInput) {
      ... on CommentInfo {
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

export interface EntertainmentCommentInput {
  postIdCommenting: string;
  content: {
    elems: ContentInput[];
  };
}

export default (entertainmentCommentInput: EntertainmentCommentInput, auth: string) =>
  sendGQL({
    query: CREATE_ENTERTAINMENT_COMMENT,
    variables: {
      entertainmentCommentInput,
    },
    auth,
  });
