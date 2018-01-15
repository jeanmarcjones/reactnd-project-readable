import * as ScoreAPI from "../utils/api_score";
import { updateComment } from "./comments";
import { updatePost } from "./posts";

export const updateScore = ({ id, component, option }) => (dispatch) => (
  ScoreAPI
    .setScore(id, component, option)
    .then((res) => {
      console.log('res', res.type);
      res.type === 'posts'
        ? dispatch(updatePost({ post: res }))
        : dispatch(updateComment({ comment: res }))
    })
)
