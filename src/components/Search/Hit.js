import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Hit = props => {
  const { hit } = props;

  return (
    <React.Fragment>
      <Link to={hit.slug}>{hit.title}</Link>

    </React.Fragment>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};

export default Hit;
