import { GET_PAGE } from './type';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PAGE:
      return {
        slug: action.payload.slug,
        sections: action.payload.sections,
      };
    default:
      return state;
  }
};
