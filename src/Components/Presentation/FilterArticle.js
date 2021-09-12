import React from 'react';
import PropTypes from 'prop-types';

const FilterArticle = (props) => {
  const { handleFilterChange } = props;
  const categories = ['All', 'economy', 'technology', 'general', 'entertainment', 'game', 'finance', 'deals', 'industry', 'news', 'politics', 'fashion', 'lifestyle', 'business', 'company', 'regional', 'world'];

  return (
    <div>
      <select
        onChange={handleFilterChange}
        className="form-select my-5"
        aria-label="Default select example"
      >
        {
          categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))
        }
      </select>
    </div>
  );
};

FilterArticle.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterArticle;
