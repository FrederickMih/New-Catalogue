import axios from 'axios';

export const SEARCH_ARTICLE = 'SEARCH_ARTICLE';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_MORE_ARTICLES = 'FETCH_MORE_ARTICLES';
export const LOADING = 'LOADING';
export const FILTER_ARTICLE = 'FILTER_ARTICLE';

const apiKey = 'Q2yqQDBUwiAJgU0GhygY5N5q4rLITbMzOSFIt3yOT8chT-pr';

const searchArticle = (keyword) => (dispatch) => {
  dispatch({
    type: SEARCH_ARTICLE,
    payload: keyword,
  });
};

const fetchArticles = (keyword, page = 1) => (dispatch) => {
  const req1 = new Request(`https://api.currentsapi.services/v1/search?keywords=us&language=en&apiKey=${apiKey}&page=${page}`);
  axios.get(req1)
    .then((response) => dispatch({
      type: FETCH_ARTICLES,
      payload: response.news,
    }))
    .catch((err) => (
      console.log(err)
    ));
};

const fetchMoreArticles = () => (dispatch) => {
  const req2 = new Request('https://api.currentsapi.services/v1/search?keywords=Amazon&language=en&apiKey=Q2yqQDBUwiAJgU0GhygY5N5q4rLITbMzOSFIt3yOT8chT-pr');
  axios.get(req2)
    .then((response) => dispatch({
      type: FETCH_MORE_ARTICLES,
      payload: response.news,
    }))
    .catch((err) => (console.log(err)));
};

const setLoading = () => ({
  type: LOADING,
});

const filterArticle = (filter) => ({
  type: FILTER_ARTICLE,
  payload: filter,
});

export {
  searchArticle, fetchArticles, fetchMoreArticles, setLoading, filterArticle,
};
