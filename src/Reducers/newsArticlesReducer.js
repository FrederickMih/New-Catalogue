import {
  FETCH_ARTICLES,
  FETCH_MORE_ARTICLES,
} from '../Actions';

export const initialState = {
  keyword: '',
  articles: [],
  article: [],
  loading: false,
  page: 1,
  initialScreen: true,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case FETCH_MORE_ARTICLES:
      return {
        ...state,
        article: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default articleReducer;
