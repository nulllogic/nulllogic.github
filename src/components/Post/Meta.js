import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";


const Meta = props => {
  const { prefix, author: authorName, category, theme } = props;

  return (
    <p className="meta">
      <span>
         {prefix}
      </span>
      <span>
         {authorName}
      </span>
      {category && (
        <span>
          
          <Link to={`/category/${category.split(" ").join("-")}`}>{category}</Link>
        </span>
      )}

    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Meta;
