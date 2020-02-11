import React from "react";
import PropTypes from "prop-types";


import config from "../../../content/meta/config";

const Comments = props => {
  const { facebook, slug, theme } = props;

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        
      </div>

    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;
