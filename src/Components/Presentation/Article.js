import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article } = props;
  return (
    <div className="col-md-3 my-4">
      <p className="text-dark card-title">
        {article.title}

      </p>
      <p className="text-dark card-title">
        <i className="author">Author:</i>
        {' '}
        <br />
        {article.author}

      </p>
      <div className="card card-body .bg-success text-center h-80">
        <img className="w-100 mb-4" src={article.image} alt="articleImage" />
        <Link className="btn btn-secondary mt-auto" to={`/article/${article.image}`}>
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
