import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchArticle from './SearchArticle';
import ArticleContainer from './ArticleContainer';
import { fetchArticles } from '../../Actions';

const Main = (props) => {
  useEffect(() => {
    props.fetchArticles(props.keyword);
  }, []);

  return (
    <div className="container">
      <SearchArticle />
      <ArticleContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.articles,
});

Main.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

Main.defaultProps = {
  keyword: '',
};

export default connect(mapStateToProps, { fetchArticles })(Main);
