import React from 'react';
import PropTypes from 'prop-types';

const FilterArticle = (props) => {
  const { handleArticleChange } = props;
  const categories = ['All', 'economy', 'technology', 'general', 'entertainment', 'game', 'finance', 'deals', 'industry', 'news', 'politics', 'middle east', 'fashion', 'lifestyle', 'business', 'company', 'regional', 'world'];

  return (
    <div>
      <select
        onChange={handleArticleChange}
        className="form-select my-5"
        aria-label="Default select example"
      >
        {
          categories.map((genre) => (
            <option
              key={genre}
              value={genre}
            >
              {genre}
            </option>
          ))
        }
      </select>
    </div>
  );
};

FilterArticle.propTypes = {
  handleArticleChange: PropTypes.func.isRequired,
};

export default FilterArticle;
