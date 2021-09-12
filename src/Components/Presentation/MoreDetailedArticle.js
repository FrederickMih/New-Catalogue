import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoreArticles } from '../../Actions';

const MoreDetailedArticle = (props) => {
  useEffect(() => {
    props.fetchMoreArticles(props.match.params.id);
  }, []);

  const { article } = props;

  const articleBody = (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={article.image} className="thumnail" alt="img" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{article.title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Article Title: </strong>
              {article.title}
            </li>
            <li className="list-group-item">
              <strong>Article Description: </strong>
              {article.description}
            </li>
            <li className="list-group-item">
              <strong>Content: </strong>
              {article.content}
            </li>
            <li className="list-group-item">
              <strong>Date: </strong>
              {article.published}
            </li>
            <li className="list-group-item">
              <strong>Language: </strong>
              {article.language}
            </li>
            <li className="list-group-item">
              <strong>Category: </strong>
              {article.category}
            </li>
            <li className="list-group-item">
              <strong>More Info: </strong>
              {article.url}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-5 text-light">
          <div className="col-md-12">
            <hr />
            <a href={`https://www.imdb.com/title/${article.url}`} target="_blank" rel="noopener noreferrer" className="btn mx-5 mt-2 btn-dark">
              ReadMore...
            </a>
            <Link to="/" rel="noopener noreferrer" className="btn mx-3 btn-default btn-dark">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const content = articleBody;
  return (
    <div>{content}</div>
  );
};

const mapStateToProps = (state) => ({
  article: state.articles.article,
});

MoreDetailedArticle.propTypes = {
  fetchMoreArticles: PropTypes.func.isRequired,
  article: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
};

MoreDetailedArticle.defaultProps = {
  article: [],
  match: 0,
};

export default connect(mapStateToProps, { fetchMoreArticles })(MoreDetailedArticle);
