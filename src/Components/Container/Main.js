import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoreArticles } from '../../Actions';

const Main = (props) => {
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    props.fetchMoreArticles();
  });

  return (
    <div>
      {articles ? articles.map((article) => (
        <div key={article.title} article={article} />
      )) : 'Please wait'}
    </div>
  );
};
Main.propTypes = {
  fetchMoreArticles: PropTypes.func.isRequired,
  // article: PropTypes.string.isRequired,
};

Main.defaultProps = {
  // article: [],
};

export default Main;
