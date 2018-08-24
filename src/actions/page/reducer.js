import { GET_PAGE } from './type';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PAGE:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
