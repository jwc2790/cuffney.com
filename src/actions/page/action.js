import { GET_PAGE } from './type';

export default slug => (dispatch) => {
  dispatch({
    type: GET_PAGE,
    payload: {
      slug,
      sections: [
        { name: 'heading', id: '1234-1234' },
        { name: 'footer', id: '1234-1235' },
      ],
    },
  });
};
