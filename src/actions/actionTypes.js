export const UPDATE_POSTS = 'UPDATE_POSTS';
export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return state;
    default:
      return state;
  }
}
