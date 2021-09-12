import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article } = props;
  return (
    <div className="col-md-3 my-4">
      <div className="card card-body .bg-success text-center h-80">
        <img className="w-100 mb-2" src={article.image} alt="articleImage" />
        <h6 className="text-light card-title">
          {article.title}
          -
          {article.author}
        </h6>
        <Link className="btn btn-warning mt-auto" to={`/film/${article.id}`}>
          Article Details
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.instanceOf(Object),
};

Article.defaultProps = {
  article: [],
};

export default Article;
