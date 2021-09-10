import {
  SEARCH_ARTICLE,
  LOADING,
} from '../Actions';

export const initialState = {
  keyword: '',
  articles: [],
  article: [],
  loading: false,
  page: 1,
  initialScreen: true,
};

const searchLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLE:
      return {
        ...state,
        keyword: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default searchLoadingReducer;
