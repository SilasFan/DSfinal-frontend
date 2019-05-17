import sendGQL from '@/SendGQL';
import {ContentInput} from "@/scripts/hot/Create";

const CREATE_SCHOOLHEAT_COMMENT = `
  mutation CreateSchoolHeatComment($schoolHeatCommentInput: SchoolHeatCommentInput!) {
    createSchoolHeatComment(schoolHeatCommentInput: $schoolHeatCommentInput) {
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


export interface SchoolHeatCommentInput {
  postIdCommenting: string;
  content: {
    elems: ContentInput[];
  };
}

export default (schoolHeatCommentInput: SchoolHeatCommentInput, auth: string) =>
  sendGQL({
    query: CREATE_SCHOOLHEAT_COMMENT,
    variables: {
      schoolHeatCommentInput,
    },
    auth,
  });
