import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleContainer from './ArticleContainer';
import { fetchArticles } from '../../Actions';

const Main = (props) => {
  useEffect(() => {
    props.fetchArticles(props);
  }, []);

  return (
    <div className="container">
      <ArticleContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.articles,
});

Main.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
};

// Main.defaultProps = {
//   loading: false,
//   text: false,
// };

export default connect(mapStateToProps, { fetchArticles })(Main);
