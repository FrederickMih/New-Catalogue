import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../Presentation/Article';

const ArticleContainer = (props) => {
  const { articles, filter } = props;

  const filterArticles = (articles, filter) => (filter === 'All' ? articles.news
    : articles.news.filter((article) => article.category === filter));

  const filteredArticles = filterArticles(articles, filter);

  console.log(articles);

  let content = '';
  content = articles.Response === 'True'
    ? filteredArticles.map((article) => <Article key={article.id} article={article} />) : '';
  return (
    <div className="row">
      {content}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  filter: state.filter.filter,
});

ArticleContainer.propTypes = {
  articles: PropTypes.instanceOf(Object),
  filter: PropTypes.string,
};

ArticleContainer.defaultProps = {
  articles: [],
  filter: '',
};

export default connect(mapStateToProps)(ArticleContainer);
