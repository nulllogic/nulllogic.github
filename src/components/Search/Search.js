import React from "react";
import PropTypes from "prop-types";

import Hit from "./Hit";

const Search = props => {
  const { algolia, theme } = props;

  return (
    <React.Fragment>
      <div className="search">
        
      </div>

    </React.Fragment>
  );
};

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Search;
