import { GET_PAGE } from './type';

export default slug => (dispatch) => {
  dispatch({
    type: GET_PAGE,
    payload: {
      slug,
      footer: true,
      sections: [
        {
          name: 'masthead',
          id: '1',
          header: 'Montana',
          src: '/imgs/masthead.jpg',
        }, {
          name: 'grid-items',
          id: '2',
          items: [
            { title: 'Nike', src: '/imgs/nike.png' },
            { title: 'The Program PDX', src: '/imgs/program.png' },
          ],
        }, {
          name: 'text',
          id: '3',
          text: 'lorem ipsum',
        }, {
          name: 'image',
          id: '4',
          src: '/imgs/mist.jpg',
        },
      ],
    },
  });
};
