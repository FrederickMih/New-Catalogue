import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchArticle, fetchArticles, setLoading, filterArticle,
} from '../../Actions';
import FilterArticle from '../Presentation/FilterArticle';

const SearchArticle = (props) => {
  const { filterArticle } = props;

  useEffect(() => {
    props.fetchArticles('technology');
  }, []);

  const onChange = (e) => {
    props.searchArticle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (props.keyword === '') {
      props.fetchArticles('technology');
    } else {
      props.fetchFilms(props.keyword);
    }
    props.setLoading();
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    filterArticle(filter);
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
          Search Article
        </h1>
        <form id="searchForm" onSubmit={onSubmit}>
          <input onChange={onChange} type="text" className="form-control" name="searchText" placeholder="Search Films . . ." />
          <FilterArticle handleFilterChange={handleFilterChange} />
          <button type="submit" className="btn btn-dark w-25 btn-bg mb-3">Search</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.articles.keyword,
});

SearchArticle.propTypes = {
  searchArticle: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  filterArticle: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

SearchArticle.defaultProps = {
  keyword: 'false',
};
export default connect(mapStateToProps, {
  searchArticle, fetchArticles, setLoading, filterArticle,
})(SearchArticle);
