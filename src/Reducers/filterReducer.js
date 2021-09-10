import { FILTER_ARTICLE } from '../Actions';

export const initialState = {
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ARTICLE: {
      const filter = action.payload;
      return {
        ...state, filter,
      };
    }
    default:
      return { ...state };
  }
};

export default filterReducer;
