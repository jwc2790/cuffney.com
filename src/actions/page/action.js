import { GET_PAGE } from './type';

export default () => (dispatch) => {
  dispatch({
    type: GET_PAGE,
    payload: { info: 'goes here' },
  });
};
